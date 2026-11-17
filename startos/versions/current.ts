import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2.17.0:0',
  releaseNotes: {
    en_US: `Updated Linkwarden to 2.17.0.

**Features**

- Drag links within a collection into a custom order, now the default sort
- Much smoother scrolling through thousands of links, collections and tags

**Security**

- Changing your password signs you out on every other device and revokes your access tokens; sign the browser extension and integrations such as Floccus back in afterwards
- After 15 wrong passwords in a row, an account accepts one attempt every 25 seconds
- Fixes several moderate-severity security issues
- Reset Admin Password now also signs the administrator out everywhere and clears the wrong-password limit

[Full release notes](https://github.com/linkwarden/linkwarden/releases/tag/v2.17.0)`,
    es_ES: `Linkwarden actualizado a 2.17.0.

**Novedades**

- Arrastra los enlaces de una colección a un orden personalizado, ahora el orden predeterminado
- Desplazamiento mucho más fluido entre miles de enlaces, colecciones y etiquetas

**Seguridad**

- Cambiar tu contraseña cierra la sesión en todos los demás dispositivos y revoca tus tokens de acceso; vuelve a iniciar sesión en la extensión del navegador y en integraciones como Floccus
- Tras 15 contraseñas incorrectas seguidas, una cuenta acepta un intento cada 25 segundos
- Corrige varios problemas de seguridad de gravedad moderada
- Restablecer contraseña de administrador ahora también cierra la sesión del administrador en todas partes y borra el límite de contraseñas incorrectas

[Notas completas](https://github.com/linkwarden/linkwarden/releases/tag/v2.17.0)`,
    de_DE: `Linkwarden auf 2.17.0 aktualisiert.

**Neu**

- Links in einer Sammlung per Drag-and-drop in eine eigene Reihenfolge bringen, jetzt die Standardsortierung
- Deutlich flüssigeres Scrollen durch Tausende Links, Sammlungen und Tags

**Sicherheit**

- Eine Passwortänderung meldet dich auf allen anderen Geräten ab und widerruft deine Zugriffstoken; melde die Browser-Erweiterung und Integrationen wie Floccus danach erneut an
- Nach 15 falschen Passwörtern in Folge nimmt ein Konto nur noch einen Versuch alle 25 Sekunden an
- Behebt mehrere Sicherheitsprobleme mittleren Schweregrads
- Administrator-Passwort zurücksetzen meldet den Administrator jetzt auch überall ab und hebt die Sperre nach falschen Passwörtern auf

[Vollständige Versionshinweise](https://github.com/linkwarden/linkwarden/releases/tag/v2.17.0)`,
    pl_PL: `Zaktualizowano Linkwarden do 2.17.0.

**Nowości**

- Przeciągaj linki w kolekcji, ustalając własną kolejność — teraz domyślne sortowanie
- Znacznie płynniejsze przewijanie tysięcy linków, kolekcji i tagów

**Bezpieczeństwo**

- Zmiana hasła wylogowuje cię na wszystkich innych urządzeniach i unieważnia tokeny dostępu; zaloguj ponownie rozszerzenie przeglądarki i integracje takie jak Floccus
- Po 15 błędnych hasłach z rzędu konto przyjmuje jedną próbę co 25 sekund
- Naprawia kilka problemów bezpieczeństwa o umiarkowanej wadze
- Zresetuj hasło administratora teraz również wylogowuje administratora wszędzie i znosi limit błędnych haseł

[Pełne informacje o wydaniu](https://github.com/linkwarden/linkwarden/releases/tag/v2.17.0)`,
    fr_FR: `Linkwarden mis à jour vers 2.17.0.

**Nouveautés**

- Glissez les liens d'une collection dans un ordre personnalisé, désormais le tri par défaut
- Défilement bien plus fluide parmi des milliers de liens, collections et étiquettes

**Sécurité**

- Changer votre mot de passe vous déconnecte de tous les autres appareils et révoque vos jetons d'accès ; reconnectez ensuite l'extension de navigateur et les intégrations comme Floccus
- Après 15 mots de passe erronés d'affilée, un compte n'accepte qu'une tentative toutes les 25 secondes
- Corrige plusieurs problèmes de sécurité de gravité modérée
- Réinitialiser le mot de passe administrateur déconnecte désormais aussi l'administrateur partout et lève la limite de mots de passe erronés

[Notes de version complètes](https://github.com/linkwarden/linkwarden/releases/tag/v2.17.0)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
