import { useMiddleware } from '@tgairbot/core';

const <%= name %>Middleware = useMiddleware((wrapper, next) => {
    next();
});
