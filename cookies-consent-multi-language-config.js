import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom right",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {}
    },
    language: {
        default: "en",
        autoDetect: "browser",
        translations: {
            'en': {
                consentModal: {
                    title: "We use cookies 🍪",
                    description: "We use cookies and other tracking technologies to improve your browsing experience on the website, to analyze the website traffic, and to understand where our visitors are coming from.",
                    closeIconLabel: "",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer: ""
                },
                preferencesModal: {
                    title: "Consent preferences center",
                    closeIconLabel: "Close modal",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    savePreferencesBtn: "Save preferences",
                    serviceCounterLabel: "service|services",
                    sections: [
                        {
                            title: "Cookie usage",
                            description: "Cookies are very small text files that are stored on your computer when you visit a website. We use cookies for a variety of purposes and to enhance your online experience on our website (for example, to remember your account login details). You can change your preferences and decline certain types of cookies to be stored on your computer while browsing our website."
                        },
                        {
                            title: "Strictly necessary cookies <span class=\"pm__badge\">Always enabled</span>",
                            description: "These cookies are essential to provide you with services available through our website and to enable you to use certain features of our website. Without these cookies, we cannot provide you certain services on our website.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytics cookies",
                            description: "These cookies are used to collect information to analyze the traffic to our website and how visitors are using our website. For example, these cookies may track things such as how long you spend on the website or the pages you visit which helps us to understand how we can improve our website for you. The information collected through these tracking and performance cookies do not identify any individual visitor.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "More information",
                            description: "For any query in relation to my policy on cookies and your choices, please <a href=\"mailto:kontakt@logixmusic.pl\">contact me</a>."
                        }
                    ]
                }
            },
            'pl': {
                consentModal: {
                    title: "Używamy plików cookies 🍪",
                    description: "Używamy plików cookies oraz innych technologii śledzenia, aby poprawić Twoje doświadczenia podczas przeglądania strony internetowej, analizować ruch na stronie oraz zrozumieć, skąd pochodzą nasi odwiedzający.",
                    closeIconLabel: "",
                    acceptAllBtn: "Zaakceptuj wszystkie",
                    acceptNecessaryBtn: "Odrzuć wszystkie",
                    showPreferencesBtn: "Dostosuj preferencje",
                    footer: ""
                },
                preferencesModal: {
                    title: "Centrum preferencji zgód",
                    closeIconLabel: "Zamknij",
                    acceptAllBtn: "Zaakceptuj wszystkie",
                    acceptNecessaryBtn: "Odrzuć wszystkie",
                    savePreferencesBtn: "Zapisz preferencje",
                    serviceCounterLabel: "usługa|usługi",
                    sections: [
                        {
                            title: "Wykorzystanie plików cookies",
                            description: "Pliki cookies są bardzo małymi plikami tekstowymi przechowywanymi na Twoim komputerze podczas odwiedzania strony internetowej. Wykorzystujemy pliki cookies w celu różnorodnych zastosowań oraz w celu ulepszania Twojego doświadczenia online na naszej stronie (na przykład, aby zapamiętać szczegóły logowania do Twojego konta). Możesz zmienić swoje preferencje i odrzucić określone rodzaje plików cookies, które mają być przechowywane na Twoim komputerze podczas przeglądania naszej strony internetowej."
                        },
                        {
                            title: "Pliki cookies niezbędne do działania strony <span class=\"pm__badge\">Zawsze włączone</span>",
                            description: "Te pliki cookies są niezbędne do świadczenia Ci usług dostępnych za pośrednictwem naszej strony internetowej oraz umożliwiają korzystanie z określonych funkcji naszej strony internetowej. Bez tych plików cookies nie możemy świadczyć pewnych usług na naszej stronie internetowej.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Pliki cookies analityczne",
                            description: "Te pliki cookies są używane do zbierania informacji w celu analizowania ruchu na naszej stronie internetowej oraz sposobu korzystania przez odwiedzających z naszej strony. Na przykład, te pliki cookies mogą śledzić takie rzeczy jak czas, który spędzasz na stronie internetowej lub odwiedzane przez Ciebie strony, co pomaga nam zrozumieć, jak możemy ulepszyć naszą stronę internetową dla Ciebie. Informacje zbierane za pomocą tych plików cookies nie identyfikują żadnego konkretnego odwiedzającego.",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "Więcej informacji",
                            description: "W przypadku jakichkolwiek pytań dotyczących mojej polityki dotyczącej plików cookies i Twoich wyborów, proszę <a href=\"mailto:kontakt@logixmusic.pl\">skontaktuj się ze mną</a>."
                        }
                    ]
                }
            }
        }
    }
});