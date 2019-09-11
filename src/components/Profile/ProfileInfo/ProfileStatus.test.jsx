import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="Super status"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Super status");
    });

    test("after creation, span should be displayed", () => {
        const component = create(<ProfileStatus status="Super status"/>);
        const instance = component.root;
        const span = instance.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after creation, input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="Super status"/>);
        const instance = component.root;

        expect(() => {
            const input = instance.findByType("input");
        }).toThrow();
    });

    test("after creation, span should contain the correct status", () => {
        const component = create(<ProfileStatus status="Super status"/>);
        const instance = component.root;
        const span = instance.findByType("span");
        expect(span.children[0]).toBe("Super status");
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="Super status"/>);
        const instance = component.root;
        const span = instance.findByType("span");
        span.props.onDoubleClick();
        const input = instance.findByType("input");
        expect(input.props.value).toBe("Super status");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="Super status"
                                                updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});