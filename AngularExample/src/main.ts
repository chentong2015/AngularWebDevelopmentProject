import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// app.module AppModule启动的主方法
// The main starting file from where the AppModule is bootstraped
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
