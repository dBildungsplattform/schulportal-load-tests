SPSH_BASE=$1
CONFIG=$2 # stage configuration (spike, stress, breakpoint)

echo  SPSH_BASE="$SPSH_BASE"  CONFIG="$CONFIG"  KC_BASE="$KC_BASE" 

if [[ -z "$CONFIG" ]]; then
    echo "no config specified"
    return 1
fi
PATTERN=$3 # ucs must match this
if [[ -z "$PATTERN" ]]; then
    PATTERN="*"
fi

KC_BASE=$4 # not needed yet

IS_LOCAL=1
if [[ "$SPSH_BASE" =~ "localhost" ]]; then
    IS_LOCAL=0
fi

# create output/, if not present
if [[ ! -d output/ ]]; then
    mkdir output/
fi

for uc in loadtest/usecases/*; do
    if [[ "$uc" =~ "$PATTERN" ]]; then
        # compatibility-mode for typescript
        options="--compatibility-mode=experimental_enhanced"

        # for localhost
        if [[ "$IS_LOCAL" -eq 0 ]]; then
            options="${options} --insecure-skip-tls-verify"

            # setup csv file for output
            filename=${uc##*/}
            csv="output/${filename%.ts}.csv"
            touch "$csv"
            if [[ -w "$csv" ]]; then
                options="${options} --out csv=${csv}"
            fi
        else
            options="${options} -o experimental-prometheus-rw"
        fi
        K6_PROMETHEUS_RW_SERVER_URL=http://application-kube-prometheu-prometheus.monitoring:9090/api/v1/write \
        k6 run $options -e SPSH_BASE="$SPSH_BASE" -e CONFIG="$CONFIG" -e KC_BASE="$KC_BASE" "$uc"
    fi
done