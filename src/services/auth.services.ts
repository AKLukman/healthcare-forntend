/* eslint-disable @typescript-eslint/no-explicit-any */
import { authKey } from "@/constant/authKey"
import { decodeToken } from "@/utils/jwt"
import { getFromLocalStorage, removeFromLocalStorage, setLocalStorage } from "@/utils/localStorage"

export const storeUserInfo = async ( { accessToken }: { accessToken: string } ) => {

    return setLocalStorage( authKey, accessToken )

}

export const getUserInfo = () => {
    const authToken = getFromLocalStorage( authKey );
    if ( authToken ) {
        try {
            const decodedData: any = decodeToken( authToken );
            return {
                ...decodedData,
                role: decodedData?.role?.toLowerCase(),
            };
        } catch ( err ) {
            console.warn( "Failed to decode token", err );
            return {};
        }
    } else {
        return {};
    }
};
export const isLoggedin = () => {
    const authToken = getFromLocalStorage( authKey );

    if ( authToken ) {
        return !!authToken
    }

}
export const removeUser = () => {
    return removeFromLocalStorage( authKey )

}