export const reducer = (state, actions) => {
    switch (actions.type) {
      case 'ADDITION':
        return { ...state, values: Number(state.value1) + Number(state.value2)  };
      case 'SUBTRACTION':
        return { ...state, values: actions.payload.num1 - actions.payload.num2  };
      case 'MULTIPLICATION':
        return { ...state, values: actions.payload.num1 * actions.payload.num2  };
        case 'DIVISION':
        return { ...state, values: actions.payload.num1 / actions.payload.num2  };
      default:
        return state;
    }
  };
  