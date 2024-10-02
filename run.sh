SPSH_BASE=$1
KC_BASE=$2 # not needed yet

for uc in loadtest/usecases/*; do
    K6_VUS=1 K6_ITERATIONS=1 k6 run --compatibility-mode=experimental_enhanced -e SPSH_BASE="$SPSH_BASE" -e KC_BASE="$KC_BASE" "$uc"
done