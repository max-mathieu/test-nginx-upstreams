# test-nginx-upstreams

How to test

1. clone the repo
2. copy test-upstream conf to your nginx/openresty conf.d folder
3. in one pane: `node upstream.js 8800`
4. in another pane: `node upstream.js 8801`
5. in the last pane: `node client.js`

8800 should be the one responding all the time

Then kill (Ctrl+C) the 8800 upstream, and see how fast it switches to 8801, without any 502

Then restart the 8800 upstream. It takes about 10 seconds for node to ok that the upstream is back. This is because of http://nginx.org/en/docs/http/ngx_http_upstream_module.html#fail_timeout
