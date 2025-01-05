import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
};

const saveToLocalStorage = (state) => {
    localStorage.setItem("cart", JSON.stringify(state));
};

const initialState = loadFromLocalStorage();

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
            const exist = state.find(
                (item) =>
                    item.id === action.payload.id &&
                    item.color === action.payload.color &&
                    item.size === action.payload.size
            );
            if (exist) {
                exist.count = Number(exist.count);
                exist.count += Number(action.payload.count);
            } else {
                state.push({ ...action.payload, count: Number(action.payload.count) });
            }
            saveToLocalStorage(state);
        },
        remove: (state, action) => {
            const updatedState = state.filter(
                (item) =>
                    !(
                        item.id === action.payload.id &&
                        item.color === action.payload.color &&
                        item.size === action.payload.size
                    )
            );
            saveToLocalStorage(updatedState);
            return updatedState;
        },
        clear: () => {
            const clearedState = [];
            saveToLocalStorage(clearedState);
            return clearedState;
        },
        update: (state, action) => {
            state.forEach((item) => {
                if (
                    item.id === action.payload.id &&
                    item.color === action.payload.color &&
                    item.size === action.payload.size
                ) {
                    item.count = Number(action.payload.count);
                }
            });
            saveToLocalStorage(state);
        },
    },
});

export const { add, remove, clear, update } = cartSlice.actions;
export default cartSlice.reducer