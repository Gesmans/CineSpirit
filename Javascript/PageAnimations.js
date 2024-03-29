$(function() {
                AOS.init({

                });

                onElementHeightChange(document.body, function() {
                    AOS.refresh();
                });
            });

            function onElementHeightChange(elm, callback) {
                var lastHeight = elm.clientHeight
                var newHeight;

                (function run() {
                    newHeight = elm.clientHeight;
                    if (lastHeight !== newHeight) callback();
                    lastHeight = newHeight;

                    if (elm.onElementHeightChangeTimer) {
                        clearTimeout(elm.onElementHeightChangeTimer);
                    }

                    elm.onElementHeightChangeTimer = setTimeout(run, 200);
                })();
            }