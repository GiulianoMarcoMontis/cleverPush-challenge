# Coding Challenge Giuliano CleverPush

## Voraussetzungen:

Dokumentationen zu unserem JavaScript SDK findest du hier:

https://developers.cleverpush.com/

Voraussetzung für die Aufgabe ist ein kostenloser Account bei CleverPush und ein angelegter Kanal mit Web Push Plattform innerhalb dieses Accounts:

https://app.cleverpush.com/

## Aufgabe:

Baue eine Seite mit einem iFrame. Innerhalb des iFrames gibt es einen Button. Das CleverPush Skript selbst liegt nicht im iFrame sondern im Top Frame. Das CleverPush Skript darf nicht im iFrame enthalten sein, dort dürfen aber eigene Skripte platziert werden.

Der Button kann folgenden Status haben:

Nicht abonniert
Abonniert
Web Push nicht unterstützt (disabled)
Ziel ist es, dass der Button beim erstmaligen Klick das Web Push Opt-In auslöst (siehe SDK Docs). Schlägt etwas fehl, soll ein Fehler angezeigt werden. Ist der User bereits Abonnent, meldet der Button den Nutzer wieder vom Web Push ab. Wird Web Push nicht unterstützt (bspw. Firefox privater Modus) ist der Button nicht nutzbar.

## Technologien / Libraries:

JavaScript
CleverPush JS SDK
Optional: React.JS (Für den Button im iFrame)
