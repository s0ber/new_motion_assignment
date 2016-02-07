const testsContext = require.context('../src', true, /__tests__\/.*\.js$/)
testsContext.keys().forEach(testsContext)
