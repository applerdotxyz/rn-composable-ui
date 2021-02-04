/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const getSchema = async (roleKey: string, userId: string) => {
  const res = await fetch(
    // `https://run.mocky.io/v3/c03ca82f-c15f-4bc3-beef-4f64d297654d`,
    "http://localhost:8080/transaction-web/v1/schema/",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // TODO : REMOVE this hardcoding
        userId: userId,
        roleKey: roleKey,
      }),
    }
  );

  const resJSON = await res.json();
  console.log("resJson from getSchema : : : : ----> ", await resJSON);
  return await resJSON;
};
