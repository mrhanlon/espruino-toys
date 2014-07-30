var blink, init;

blink = function (LED) {
  digitalWrite(LED, ! digitalRead(LED));
};

init = function() {
  digitalWrite(LED1, 0);
  digitalWrite(LED2, 0);
  digitalWrite(LED3, 0);

  setInterval(function() {
    blink(LED1);
  }, 600);

  // delay LED2 200ms
  setTimeout(function() {
    setInterval(function() {
      blink(LED2);
    }, 600);
  }, 200);

  // delay LED3 400ms
  setTimeout(function() {
    setInterval(function() {
      blink(LED3);
    }, 600);
  }, 400);
};

init();
