import { requestApi } from "@/utils/request-api";
import { TSearch, TUser } from "@/utils/types";
import { CONTENT_TYPE_DATA, RequestMethod, RequestStatus } from "@/utils/vars";
import { createStore } from "vuex";

const initialState = {
    users: [] as TUser[],
    requestStatus: "",
    errorMessage: "",
};

export default createStore({
    state: initialState,

    mutations: {
        requestPending(state) {
            state.requestStatus = RequestStatus.LOADING;
            state.errorMessage = initialState.errorMessage;
        },
        requestSuccess(state) {
            state.requestStatus = RequestStatus.SUCCESS;
        },
        requestError(state) {
            state.requestStatus = RequestStatus.ERROR;
        },
        addUsers(state, action) {
            state.users = action;
        },
    },

    actions: {
        async USER_REQUEST({ commit }, data: TSearch) {
            commit("requestPending");
            const arr = data.search.split(/[-+, .;:"]/);

            let send = "?";

            arr.map((el) =>
                Number(el)
                    ? (send += `id=${el}&`)
                    : el !== ""
                    ? (send += `username=${
                          el.charAt(0).toUpperCase() + el.slice(1)
                      }&`)
                    : null
            );

            // Здесь только логика запроса и возврата данных
            // Никакой обработки ошибок
            const response = await requestApi(send, {
                method: RequestMethod.GET,
                headers: {
                    "Content-Type": CONTENT_TYPE_DATA,
                },
            });
            let result = [];
            Array.isArray(response)
                ? (result = response)
                : result.push(response);

            // return result;
            commit("addUsers", result);
            commit("requestSuccess");
        },
    },

    getters: {
        getRequestStatus: (state) => {
            return state.requestStatus;
        },
        getErrorMessage: (state) => {
            return state.errorMessage;
        },
        getUsers: (state) => {
            return state.users;
        },
        getUserById: (state) => (id: number) => {
            return state.users.find((u) => u.id === id);
        },
    },

    strict: true,
});
