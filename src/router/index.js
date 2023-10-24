import { createRouter, createWebHistory } from 'vue-router';
import pipeline from '@/middlewares/pipeline'

// autoload routes
const modules = import.meta.globEager('./**/*.js')

const router = createRouter({
  history: createWebHistory(),
  routes: Object.entries(modules)
    .map((fileModule) => {
      return fileModule[1].default
    })
    .flat()
});

// apply middleware
router.beforeEach((to, from, next) => {
  // prepare variable
  const middleware = to.meta.middleware //? to.meta.middleware : [rules.auth];
  const context = {
    to,
    from,
    next,
  }

  /** Navigate to next if middleware is not applied for now */
  if (!to.meta.middleware) {
    return next()
  }

  return middleware[0]({
    ...context,
    next:pipeline(context, middleware,1)
  })
})

export default router;
