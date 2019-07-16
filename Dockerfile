FROM jekyll/jekyll

WORKDIR /srv/jekyll

# Add the entrypoint script, set permissions, and include vendor bin to path
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint
ENV PATH "$PATH:/srv/cadence/vendor/bin"

# Run the entrypoint script
ENTRYPOINT ["docker-entrypoint"]