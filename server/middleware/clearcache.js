import mcache from 'memory-cache';

export function cache(duration) {
  return (req, res, next) => {
    const key = 'express' + (req.originalUrl || req.url);
    const cachedBody = mcache.get(key);

    if (cachedBody) {
      res.send(cachedBody);
      return;
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        mcache.put(key, body, duration);
        res.sendResponse(body);
      };

      next();
    }
  };
}
