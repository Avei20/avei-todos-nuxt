
export const useAppStore = defineStore('app', {
    state: () => ({
        snackbar: {
            isShow: false,
            message: '',
        }
    }),
    actions: {
        showSnackbar(message: string) {
            this.snackbar.isShow = true 
            this.snackbar.message = message
        }
    }
})