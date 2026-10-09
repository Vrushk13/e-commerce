import { getApiUrl } from "./config";

const BASE_URL = `${getApiUrl()}/orders`;

async function parseResponse(response) {
    const text = await response.text();

    if (!text) {
        return null;
    }

    try {
        return JSON.parse(text);
    } catch {
        return text;
    }
}

export async function createOrder(order) {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    });

    if (!response.ok) {
        const errorData = await parseResponse(response);
        const error = new Error(
            errorData?.message || `Request failed (HTTP ${response.status})`
        );
        error.status = response.status;
        throw error;
    }

    return parseResponse(response);
}

export async function getOrders() {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
        const errorData = await parseResponse(response);
        const error = new Error(
    errorData?.message ||
    `Request failed (HTTP ${response.status})`
);
        error.status = response.status;
        throw error;
    }

    return parseResponse(response);
}

export async function getOrderById(id) {
    const response = await fetch(`${BASE_URL}/${id}`);

    if (!response.ok) {
        const errorData = await parseResponse(response);
        const error = new Error(
            errorData?.message || "Request failed"
        );
        error.status = response.status;
        throw error;
    }

    return parseResponse(response);
}

export async function updateOrder(id, updatedOrder) {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedOrder)
    });

    if (!response.ok) {
        const errorData = await parseResponse(response);
        const error = new Error(
            errorData?.message || "Request failed"
        );
        error.status = response.status;
        throw error;
    }

    return parseResponse(response);
}

export async function cancelOrderById(id) {
    const response = await fetch(`${BASE_URL}/${id}/cancel`, {
        method: "PATCH"
    });

    if (!response.ok) {
        const errorData = await parseResponse(response);
        const error = new Error(
            errorData?.message || "Request failed"
        );
        error.status = response.status;
        throw error;
    }

    return parseResponse(response);
}
