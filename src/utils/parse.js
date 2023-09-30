const parseResponse = (responseJSON) => {
  try {
    let result = {};
    responseJSON.blocks.map((block) => {
      if (block.nested) {
        return;
      }
      if (Array.isArray(block.blockData)) {
        let arr = block.blockData.map((nestedObj) => {
          return Object.values(nestedObj).reduce((acc, obj) => {
            let blockData = obj.blockData;
            if (typeof blockData === "string") {
              let nested = responseJSON.blocks.find(
                (block) => block.id === blockData
              );
              let blockName = obj.fieldName;
              if (Array.isArray(nested.blockData)) {
                nested = nested.blockData.map((nestedObj) => {
                  return Object.values(nestedObj).reduce(
                    (acc, { blockData }) => {
                      return { ...acc, ...blockData };
                    },
                    {}
                  );
                });
                blockData = { [blockName]: nested };
              }
              if (typeof nested.blockData === "object") {
                nested = Object.values(nested.blockData).reduce(
                  (acc, { blockData }) => {
                    return { ...acc, ...blockData };
                  },
                  {}
                );
                blockData = { [blockName]: nested };
              }
            }
            return { ...acc, ...blockData };
          }, {});
        });
        result[block.blockName] = arr;
        return;
      }
      if (block.blockType === "group") {
        result[block.blockName] = Object.values(block.blockData).reduce(
          (acc, { blockData }) => {
            return { ...acc, ...blockData };
          },
          {}
        );
        return;
      }

      result[block.blockName] = block.blockData[block.blockName];
    });
    return { error: false, response: result, message: null };
  } catch (error) {
    return { error: true, response: null, message: error };
  }
};

const parseFn = (responseObj) => {
  const { error, message, response } = parseResponse(responseObj);

  if (error) {
    throw new Error(message);
  }

  return response;
};

export default parseFn;
