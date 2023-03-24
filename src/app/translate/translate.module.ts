import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/naming-convention
export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http,
		'../../assets/i18n/',
		'.json');
}
@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		HttpClientModule,
		TranslateModule.forRoot({
			defaultLanguage: 'en',
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
	],
	exports: [TranslateModule],
})
export class NgxTranslateModule { }
