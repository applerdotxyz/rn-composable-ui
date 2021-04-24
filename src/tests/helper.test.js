const {
  setGlobalState,
} = require("../rn-config-tyler/packages/demo/helpers/lib/src/container/helpers");

test("setGloablState logic test1 isPartial", () => {
  let initialState1 = {
    ui: {},
    children: {},
    props: {},
    $global: { a: ["b", "c"] },
  };

  const passState1 = {
    a: ["d"],
  };

  const expectedState1 = {
    ui: {},
    children: {},
    props: {},
    $global: { a: ["d"] },
  };

  setGlobalState(
    (state) => {
      console.log(state);
      initialState1 = state;
    },
    initialState1,
    passState1,
    (format = "isPartial")
  );

  expect(expectedState1).toMatchObject(initialState1);
});

test("setGlobalState logic test1 mo", () => {
  let initialState1 = {
    ui: {},
    children: {},
    props: {},
    $global: { a: ["b", "c"] },
  };

  const passState1 = {
    a: ["d"],
  };

  const expectedState1 = {
    ui: {},
    children: {},
    props: {},
    $global: { a: ["b", "c"] },
    a: ["d"],
  };

  setGlobalState(
    (state) => {
      console.log(state);
      initialState1 = state;
    },
    initialState1,
    passState1,
    (format = "mo")
  );

  expect(expectedState1).toMatchObject(initialState1);
});

test("setGloablState logic test1 copy", () => {
  let initialState1 = {
    ui: {},
    children: {},
    props: {},
    $global: { a: ["b", "c"] },
  };

  const passState1 = {
    a: ["d"],
  };

  const expectedState1 = {
    ui: {},
    children: {},
    props: {},
    $global: { a: ["b", "c", "d"] },
  };

  setGlobalState(
    (state) => {
      console.log(state);
      initialState1 = state;
    },
    initialState1,
    passState1,
    (format = "copy")
  );

  expect(expectedState1).toMatchObject(initialState1);
});

test("setGlobalState logic test1 else", () => {
  let initialState1 = {
    ui: {},
    children: {},
    props: {},
    $global: { a: ["b", "c"] },
  };

  const passState1 = {
    a: ["d"],
  };

  const expectedState1 = {
    ui: {},
    children: {},
    props: {},
    $global: { a: ["d"] },
  };

  setGlobalState(
    (state) => {
      console.log(state);
      initialState1 = state;
    },
    initialState1,
    passState1,
    (format = "")
  );

  expect(expectedState1).toMatchObject(initialState1);
});

test("setGlobalState logic test2 isPartial", () => {
  let initialState1 = {
    ui: {},
    children: {},
    props: {},
    $global: { a: "b" },
  };

  const passState1 = {
    c: "d",
  };

  const expectedState1 = {
    ui: {},
    children: {},
    props: {},
    $global: { a: "b", c: "d" },
  };

  setGlobalState(
    (state) => {
      console.log(state);
      initialState1 = state;
    },
    initialState1,
    passState1,
    (format = "isPartial")
  );

  expect(expectedState1).toMatchObject(initialState1);
});

test("setGlobalState logic test2 mo", () => {
  let initialState1 = {
    ui: {},
    children: {},
    props: {},
    $global: { a: "b" },
  };

  const passState1 = {
    c: "d",
  };

  const expectedState1 = {
    ui: {},
    children: {},
    props: {},
    $global: { a: "b" },
    c: "d",
  };

  setGlobalState(
    (state) => {
      console.log(state);
      initialState1 = state;
    },
    initialState1,
    passState1,
    (format = "mo")
  );

  expect(expectedState1).toMatchObject(initialState1);
});

test("setGlobalState logic test2 copy", () => {
  let initialState1 = {
    ui: {},
    children: {},
    props: {},
    $global: { a: "b" },
  };

  const passState1 = {
    c: "d",
  };

  const expectedState1 = {
    ui: {},
    children: {},
    props: {},
    $global: { a: "b", c: "d" },
  };

  setGlobalState(
    (state) => {
      console.log(state);
      initialState1 = state;
    },
    initialState1,
    passState1,
    (format = "copy")
  );

  expect(expectedState1).toMatchObject(initialState1);
});

test("setGlobalState logic test2 else", () => {
  let initialState1 = {
    ui: {},
    children: {},
    props: {},
    $global: { a: "b" },
  };

  const passState1 = {
    c: "d",
  };

  const expectedState1 = {
    ui: {},
    children: {},
    props: {},
    $global: { c: "d" },
  };

  setGlobalState(
    (state) => {
      console.log(state);
      initialState1 = state;
    },
    initialState1,
    passState1,
    (format = "")
  );

  expect(expectedState1).toMatchObject(initialState1);
});

test("setGlobalState logic test3 isPartial", () => {
  let initialState1 = {
    ui: {},
    children: {},
    props: {},
    $global: {
      a: {
        b: "c",
      },
    },
  };

  const passState1 = {
    a: {
      e: "f",
    },
  };

  const expectedState1 = {
    ui: {},
    children: {},
    props: {},
    $global: {
      a: {
        b: "c",
        e: "f",
      },
    },
  };

  setGlobalState(
    (state) => {
      console.log(state);
      initialState1 = state;
    },
    initialState1,
    passState1,
    (format = "isPartial")
  );

  expect(expectedState1).toMatchObject(initialState1);
});

test("setGlobalState logic test3 mo", () => {
  let initialState1 = {
    ui: {},
    children: {},
    props: {},
    $global: {
      a: {
        b: "c",
      },
    },
  };

  const passState1 = {
    a: {
      e: "f",
    },
  };

  const expectedState1 = {
    ui: {},
    children: {},
    props: {},
    a: {
      e: "f",
    },
    $global: {
      a: {
        b: "c",
      },
    },
  };

  setGlobalState(
    (state) => {
      console.log(state);
      initialState1 = state;
    },
    initialState1,
    passState1,
    (format = "mo")
  );

  expect(expectedState1).toMatchObject(initialState1);
});

test("setGlobalState logic test3 copy", () => {
  let initialState1 = {
    ui: {},
    children: {},
    props: {},
    $global: {
      a: {
        b: "c",
      },
    },
  };

  const passState1 = {
    a: {
      e: "f",
    },
  };

  const expectedState1 = {
    ui: {},
    children: {},
    props: {},
    $global: {
      a: {
        b: "c",
        e: "f",
      },
    },
  };

  setGlobalState(
    (state) => {
      console.log(state);
      initialState1 = state;
    },
    initialState1,
    passState1,
    (format = "copy")
  );

  expect(expectedState1).toMatchObject(initialState1);
});

test("setGlobalState logic test3 isPartial", () => {
  let initialState1 = {
    ui: {},
    children: {},
    props: {},
    $global: {
      a: {
        b: "c",
      },
    },
  };

  const passState1 = {
    a: {
      e: "f",
    },
  };

  const expectedState1 = {
    ui: {},
    children: {},
    props: {},
    $global: {
      a: {
        e: "f",
      },
    },
  };

  setGlobalState(
    (state) => {
      console.log(state);
      initialState1 = state;
    },
    initialState1,
    passState1,
    (format = "")
  );

  expect(expectedState1).toMatchObject(initialState1);
});

test("setGlobalState logic test4 isPartial", () => {
  let initialState1 = {
    ui: {},
    children: {},
    props: {},
    $global: {
      a: {
        b: "c",
        e: "f",
      },
    },
  };

  const passState1 = {
    a: {
      e: "h",
    },
  };

  const expectedState1 = {
    ui: {},
    children: {},
    props: {},
    $global: {
      a: {
        b: "c",
        e: "h",
      },
    },
  };

  setGlobalState(
    (state) => {
      console.log(state);
      initialState1 = state;
    },
    initialState1,
    passState1,
    (format = "isPartial")
  );

  expect(expectedState1).toMatchObject(initialState1);
});

test("setGlobalState logic test4 mo", () => {
  let initialState1 = {
    ui: {},
    children: {},
    props: {},
    $global: {
      a: {
        b: "c",
        e: "f",
      },
    },
  };

  const passState1 = {
    a: {
      e: "h",
    },
  };

  const expectedState1 = {
    ui: {},
    children: {},
    props: {},
    a: {
      e: "h",
    },
    $global: {
      a: {
        b: "c",
        e: "f",
      },
    },
  };

  setGlobalState(
    (state) => {
      console.log(state);
      initialState1 = state;
    },
    initialState1,
    passState1,
    (format = "mo")
  );

  expect(expectedState1).toMatchObject(initialState1);
});

test("setGlobalState logic test4 copy", () => {
  let initialState1 = {
    ui: {},
    children: {},
    props: {},
    $global: {
      a: {
        b: "c",
        e: "f",
      },
    },
  };

  const passState1 = {
    a: {
      e: "h",
    },
  };

  const expectedState1 = {
    ui: {},
    children: {},
    props: {},
    $global: {
      a: {
        b: "c",
        e: "h",
      },
    },
  };

  setGlobalState(
    (state) => {
      console.log(state);
      initialState1 = state;
    },
    initialState1,
    passState1,
    (format = "copy")
  );

  expect(expectedState1).toMatchObject(initialState1);
});

test("setGlobalState logic test4 else", () => {
  let initialState1 = {
    ui: {},
    children: {},
    props: {},
    $global: {
      a: {
        b: "c",
        e: "f",
      },
    },
  };

  const passState1 = {
    a: {
      e: "h",
    },
  };

  const expectedState1 = {
    ui: {},
    children: {},
    props: {},
    $global: {
      a: {
        e: "h",
      },
    },
  };

  setGlobalState(
    (state) => {
      console.log(state);
      initialState1 = state;
    },
    initialState1,
    passState1,
    (format = "")
  );

  expect(expectedState1).toMatchObject(initialState1);
});
