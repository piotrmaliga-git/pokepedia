import i18n from '@/i18n';

interface UserLocale {
  locale: string;
  localeNoRegion: string;
}

const Trans = {
  get defaultLocale(): string {
    return import.meta.env.VITE_DEFAULT_LOCALE as string;
  },

  get supportedLocales(): string[] {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(',');
  },

  set currentLocale(newLocale: string) {
    i18n.global.locale.value = newLocale;
  },

  async switchLanguage(newLocale: string): Promise<void> {
    Trans.currentLocale = newLocale;
    document.querySelector('html')!.setAttribute('lang', newLocale);
    localStorage.setItem('user-locale', newLocale);
  },

  isLocaleSupported(locale: string): boolean {
    return Trans.supportedLocales.includes(locale);
  },

  getUserLocale(): UserLocale {
    const locale = window.navigator.language || window.navigator.language || Trans.defaultLocale;

    return {
      locale: locale,
      localeNoRegion: locale.split('-')[0],
    };
  },

  getPersistedLocale(): string | null {
    const persistedLocale = localStorage.getItem('user-locale');

    if (persistedLocale && Trans.isLocaleSupported(persistedLocale)) {
      return persistedLocale;
    } else {
      return null;
    }
  },

  guessDefaultLocale(): string {
    const userPersistedLocale = Trans.getPersistedLocale();
    if (userPersistedLocale) {
      return userPersistedLocale;
    }

    const userPreferredLocale = Trans.getUserLocale();

    if (Trans.isLocaleSupported(userPreferredLocale.locale)) {
      return userPreferredLocale.locale;
    }

    if (Trans.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
      return userPreferredLocale.localeNoRegion;
    }

    return Trans.defaultLocale;
  },

  async routeMiddleware(to: any, _from: any, next: any): Promise<void> {
    const paramLocale = to.params.locale;

    if (!Trans.isLocaleSupported(paramLocale)) {
      return next(Trans.guessDefaultLocale());
    }

    await Trans.switchLanguage(paramLocale);

    return next();
  },
};

export default Trans;
