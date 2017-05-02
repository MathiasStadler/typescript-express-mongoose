import * as methodOverride from 'method-override';
import * as express from 'express';
/**
 *
 *
 * @class MethodOverride
 */
// tslint:disable-next-line:no-stateless-class
class MethodOverride {
    public static configuration(): any {
        const app = express();
        app.use(methodOverride('X-HTTP-Method'));
        app.use(methodOverride('X-HTTP-Method-Override'));
        app.use(methodOverride('X-Method-Override'));
        app.use(methodOverride('_method'));
        return app;
    }
}
Object.seal(MethodOverride);

// tslint:disable:no-default-export export-name
export default MethodOverride;
