/* eslint-disable @typescript-eslint/no-explicit-any */
export const orderLineViewUpdateEventConfig: any = {
  "OrderLineView.buttonRef": {
    event: `onPress`, // TODO : For React native button I could find only onPress handler event
    handlerData: {
      tasks: {
        updateState: {
          formData: "formData.keyName",
        },
      },
    },
  },
};

const exported: any = {
  orderLineViewUpdateEventConfig,
};

export default exported;
