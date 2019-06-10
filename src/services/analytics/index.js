const gaMeasurementId = process.env.REACT_APP_GA_MEASUREMENT_ID || window.env.GA_MEASUREMENT_ID;

export function send(event) {
    if (gaMeasurementId) {
        setTimeout(() => {       
            //check if gtag initialized
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

export const EVENT = {
    "getTranscript" : {
        "name": "get_transcript",
        "parameters" : {
            //
        }
    }
};