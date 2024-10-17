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

SKIP_SSL=1
if [[ "$SPSH_BASE" =~ "localhost" ]]; then
    SKIP_SSL=0
fi

# create output/, if not present
if [[ ! -d output/ ]]; then
    mkdir output/
fi

for uc in loadtest/usecases/*; do
    if [[ "$uc" =~ "$PATTERN" ]]; then
        # setup csv file for output
        filename=${uc##*/}
        csv="output/${filename%.ts}.csv"
        touch "$csv"

        # compatibility-mode for typescript
        options="--compatibility-mode=experimental_enhanced"
        if [[ "$SKIP_SSL" -eq 0 ]]; then
            options="${options} --insecure-skip-tls-verify"
        fi
        if [[ -w "$csv" ]]; then
            options="${options} --out csv=${csv}"
        fi
        echo k6 run $options -e SPSH_BASE="$SPSH_BASE" -e CONFIG="$CONFIG" -e KC_BASE="$KC_BASE" "$uc"
        k6 run $options -e SPSH_BASE="$SPSH_BASE" -e CONFIG="$CONFIG" -e KC_BASE="$KC_BASE" "$uc"
    fi
done