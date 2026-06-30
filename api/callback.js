export default async function handler(req, res) {
  const { code } = req.query;

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const data = await tokenRes.json();
  const ok = Boolean(data.access_token);
  const payload = ok
    ? { token: data.access_token, provider: 'github' }
    : { error: data.error_description || 'Authentication failed' };
  const message = JSON.stringify(
    `authorization:github:${ok ? 'success' : 'error'}:${JSON.stringify(payload)}`
  );

  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html><html><body><script>
(function () {
  function onMsg(e) {
    window.opener.postMessage(${message}, e.origin);
    window.removeEventListener('message', onMsg);
    window.close();
  }
  window.addEventListener('message', onMsg, false);
  window.opener.postMessage('authorizing:github', '*');
})();
</script></body></html>`);
}
