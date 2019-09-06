import profileReducer, {
    addPostActionCreator,
    deletePost
} from "./profile-reducer";

const state = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: "3"},
        {id: 2, message: "It's my first post", likesCount: "5"}
    ]
};

it("posts number should be incremented", () => {
    const action = addPostActionCreator("super new text");

    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3);
});

it("the new post's message should be correct", () => {
    const action = addPostActionCreator("super new text");

    const newState = profileReducer(state, action);

    expect(newState.posts[2].message).toBe("super new text");
});

it("after deleting a post, the number of messages should be decremented", () => {
    const action = deletePost(1);

    const newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(1);
});

it(
    "after deleting a post, the number of messages shouldn't be decremented if id" +
    " is out of range",
    () => {
        const action = deletePost(1000);

        const newState = profileReducer(state, action);

        expect(newState.posts.length).toBe(2);
    }
);
