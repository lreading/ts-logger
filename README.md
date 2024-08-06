# TS-Logger: Another opinionated logger for TypeScript
This is just my preferences for confiruing my logging in my typescript projects.

## Usage
```typescript
import { getLogger, Logger } from '@lreading/ts-logger';

const logger: Logger = getLogger('my-file-name.ts');

logger.silly(string|object); // Disabled by default
logger.debug(string|object); // Disabled by default
logger.info(string|object); // Enabled by default
logger.warn(string|object); // Enabled by default
logger.error(string|object); // Enabled by default
logger.audit(string|object); // Enabled by default
```

## Configuration
There is some default configuration.  The config can be overwritten by using the `configure` function.

```typescript
import { configure } from '@lreading/ts-logger';

configure({
  logLevel: 'debug',
  maxFileSize: 50000,
  silent: false
});
```

### Log Levels
```typescript
// See src/levels.ts
const levels: winston.config.AbstractConfigSetLevels = {
	audit: 0,
	fatal: 1,
	error: 2,
	warn: 3,
	info: 4,
	debug: 5,
	silly: 6
};
```

## Audit Logging
Audit logs are saved to a separate file, aptly named `audit.log`.  Audit logs are logged at the highest level, and will always appear in the console log.
