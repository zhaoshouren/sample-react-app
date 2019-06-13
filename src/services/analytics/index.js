//read from .env files or from window.env for projects importing this service but not using React
const gaMeasurementId = process.env.REACT_APP_GA_MEASUREMENT_ID || (window.env && window.env.GA_MEASUREMENT_ID);

//TODO: refactor to return a promise to make this thenable.
export function send(event) { //event follows format EVENT constant below
    if (gaMeasurementId) {
        //use setTimeout to make this a async call
        setTimeout(() => {
            //conditionally initialize gtag 
            if (window && !window.gtag) {
                const body = document.getElementsByTagName("body")[0];

                const externalScript = document.createElement("SCRIPT");
                externalScript.setAttribute("async", true);
                externalScript.setAttribute("src", "https://www.googletagmanager.com/gtag/js?" + gaMeasurementId);
                body.appendChild(externalScript);

                const script = document.createElement("SCRIPT");
                script.innerHTML = 'window.dataLayer = window.dataLayer || [];\n'
                    + '\tfunction gtag(){dataLayer.push(arguments);}\n'
                    + '\tgtag(\'js\', new Date());\n\n'
                    + '\tgtag(\'config\', \'' + gaMeasurementId + '\');';
                body.appendChild(script);
            }

            //check if event conforms to minimum needed by window.gtag
            if (event && event.name) {
                window.gtag('event', event.name, event.parameters);
            } else {
                if (console && console.warn) {
                    if (event) {
                        console.warn("No event passed.")
                    } else {
                        console.error("event.name not specified: " + JSON.parse(event));
                    }
                }
            }
        });
    } else {
        if (console && console.error) {
            console.error('GA_MEASUREMENT_ID is undefined');
        }
    }
}

//Add commonly used events here for unique events you can pass object literals
export const EVENT = {
    getTranscript: {
        name: "get_transcript",
        parameters: {
            //
        }
    },
    goToSettings: {
        name: "go_to_settings",
        parameters: {}
    }

};