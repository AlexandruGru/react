import { useReducer, useRef, useMemo } from "react";
import { UsingReducerCard } from "../components/cards/UisungReducerCard";
import "./UsingReducerStyle.css"

export const UsingReducer = () => {
    const inputEl = useRef(null)
    const getInputValue = () => {
        const value = inputEl.current.value;
    }

    const initialState = { arr: [] }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'add':
                return { arr: [...state.arr, action.payload] }
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    const allCards = useMemo(() => state.arr.map((elem, index) => {
        return <UsingReducerCard data={elem} key={index} />
    }
    ), [state])

    return (
        <div className="reducer-container">
            <div className="reducer-title">add some text:</div>
            <input ref={inputEl}></input>
            <button
            className="reducer-button"
            onClick={() => { dispatch({ type: 'add', payload: inputEl.current.value }); getInputValue() }}>
                add
            </button>
            <div>{allCards}</div>
        </div>
    )
}