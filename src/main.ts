import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    const loader = document.getElementById('app-preloader');
    if (loader) {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 1000); // remove from DOM after fade-out
    }
  })
  .catch((err) => console.error(err));
