export class CreatomateError extends Error {
}

export class BadRequestError extends CreatomateError {
}

export class InvalidApiKeyError extends CreatomateError {
}

export class InsufficientCreditsError extends CreatomateError {
}

export class RateLimitExceededError extends CreatomateError {
}

export class ConnectionError extends CreatomateError {
}

export class TimeoutError extends CreatomateError {
}
