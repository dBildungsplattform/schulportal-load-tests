# Create image for running k6 with output for Prometheus
FROM grafana/k6:0.54.0
USER root

RUN apk add git
