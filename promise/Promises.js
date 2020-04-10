function Promises() {
  //first example
  //   let promise = new Promise((res, rej) => {
  //     res();
  //   });

  //   promise
  //     .then(() => {
  //       console.log("done");
  //     })
  //     .catch((err) => {
  //       console.log(err, "erro");
  //     });

  //second example dependency chain

  let promise4 = (check) => {
    return new Promise((res, rej) => {
      if (check) res("RESOLVED PRO 4");
      else rej("cant resolved 4");
    });
  };

  let promise5 = (check) => {
    return new Promise((res, rej) => {
      if (check) res("RESOLVED PRO 5");
      else rej("cant resolved 5 ");
    });
  };
  let promise6 = (check) => {
    return new Promise((res, rej) => {
      if (check) res("RESOLVED PRO 6");
      else rej("cant resolved 6");
    });
  };
  // in this case if your one promise delay or cancel after promise will stopped there.
  promise4(true)
    .then((msg) => {
      console.log(msg);
      return promise5(false);
    })
    .then((msg) => {
      console.log(msg);
      return promise6(true);
    })
    .then((msg) => {
      console.log(msg);
      console.log("Done");
    })
    .catch((err) => {
      console.log(err);
    });

  //RACE promise Method complete that promise which is too fast or response fast as compare to others
  let promise7 = (check) => {
    return new Promise((res, rej) => {
      setTimeout(res, 100, "DONE 7");
    });
  };

  let promise8 = (check) => {
    return new Promise((res, rej) => {
      setTimeout(res, 100, "DONE 8");
    });
  };
  let promise9 = (check) => {
    return new Promise((res, rej) => {
      setTimeout(res, 100, "DONE 9");
    });
  };

  Promise.race([promise7(), promise8(), promise9()])
    .then((msg) => {
      console.log(msg);
    })
    .catch((err) => {
      console.log(err);
    });

  // ALL promise method in this method all promises complete no matter how much take each promis opposite of race
  let promise10 = (check) => {
    return new Promise((res, rej) => {
      setTimeout(res, 100, "DONE 10");
    });
  };

  let promise11 = (check) => {
    return new Promise((res, rej) => {
      setTimeout(res, 100, "DONE 11");
    });
  };
  let promise12 = (check) => {
    return new Promise((res, rej) => {
      setTimeout(res, 100, "DONE 12");
    });
  };

  Promise.all([promise10(), promise11(), promise12()])
    .then((msg) => {
      console.log(msg);
    })
    .catch((err) => {
      console.log(err, "erroo");
    });
}
Promises();
