export async function validateResponse(response:Response): Promise<Response>{
    if(!response.ok){
        alert(await response.text() );
        throw new Error(await response.text())

    }

    return response;
}