
export const fetchRequests = () => {
    return $.ajax({
        url: `api/requests`
    });
};

export const fetchRequest = requestId => {
    return $.ajax({
        url: `api/requests/${requestId}`
    });
};

export const createRequest = request => {
    return $.ajax({
        url: `api/requests`,
        method: `POST`,
        data: request
    });
};

export const updateRequest = () => {
    return $.ajax({
        url: `api/requests/1`,
        method: `PUT`,
    });
};

export const deleteRequest = requestId => {
    return $.ajax({
        url: `api/requests/${requestId}`,
        method: `DELETE`
    });
};