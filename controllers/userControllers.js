const validateInfo = (req, res, next) => {
  const input = req.body;

  if (
    !input.firstName ||
    !input.lastName ||
    !input.age ||
    !input.email ||
    !input.fbw
  ) {
    res.json({ error: { msg: "infos are missing" } });
  } else {
    next();
  }

  res.json("controller is working");
};

const ageGreater = (req, res, next) => {
  const input = req.body;

  console.log(input.age);

  if (input.age < 18) {
    res.json({
      error: {
        message: "the user must be over 18 ",
      },
    });
  }
  next();
};

const capitalize = (req, res, next) => {
  const input = req.body;

  //   console.log(input.firstName[0]);

  if (input.firstName[0] === input.firstName[0].toUpperCase()) {
    res.json({ message: "success" });
  } else {
    res.json({ message: "error" });
  }
};

export { validateInfo, ageGreater, capitalize };
