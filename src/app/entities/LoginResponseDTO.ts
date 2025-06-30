export interface LoginResponseDTO {
    email          : string
    accessToken    : string
    refreshToken   : string
    roles          : string[]
}