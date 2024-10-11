# Create image for running k6 with output for Prometheus
FROM grafana/k6:0.54.0
USER root

COPY wrapper-script.sh wrapper-script.sh
RUN apk add git && \
    chmod +x wrapper-script.sh

ENTRYPOINT ["./wrapper-script.sh"]