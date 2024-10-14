SPSH_BASE=$1
CONFIG=$2 # stage configuration (spike, stress, breakpoint)
if [[ -z "$CONFIG" ]]; then
    echo "no config specified"
    return 1
fi
PATTERN=$3 # ucs must match this
if [[ -z "$PATTERN" ]]; then
    PATTERN="*"
fi

# KC_BASE=$2 # not needed yet

SKIP_SSL=""
if [[ "$SPSH_BASE" =~ "localhost" ]]; then
    SKIP_SSL="--insecure-skip-tls-verify"
fi

# create output/, if not present
if [[ ! -d output/ ]]; then
    mkdir output/
fi

for uc in loadtest/usecases/*; do
    if [[ "$uc" =~ "$PATTERN" ]]; then
        filename=${uc##*/}
        csv="output/${filename%.ts}.csv"
        touch "$csv"
        k6 run --compatibility-mode=experimental_enhanced --out csv="$csv" "$SKIP_SSL" -e SPSH_BASE="$SPSH_BASE" -e CONFIG="$CONFIG" -e KC_BASE="$KC_BASE" "$uc"
    fi
done