const initialMetricState = {
    toggled: false,
    data: {},
}

export const initialState = {
    HARD_DRIVE_SPACE: {...initialMetricState},
    NETWORK_UTILIZATION: {...initialMetricState},
    MEMORY_UTILIZATION: {...initialMetricState},
    CPU_UTILIZATION: {...initialMetricState},
    timescale: 'day',    
}

export const TOGGLE_METRIC = 'TOGGLE_METRIC'
export const STORE_METRICS = 'STORE_METRICS'
export const TOGGLE_TIMESCALE = 'TOGGLE_TIMESCALE'

export const toggleMetric = (metricName) => ({
    type: TOGGLE_METRIC,
    payload: {
        metricName,
    }
})

export const storeMetrics = (metrics) => ({
    type: STORE_METRICS,
    payload: {
        metrics,
    }
})

export const toggleTimescale = (timescale) => ({
    type: TOGGLE_TIMESCALE,
    payload: {
        timescale,
    }
})

// store metrics fetched from api
export const storeMetricsReducer = (state, metricsArray) => {
    const newState = {
        ...state,
    }
    metricsArray.forEach(metric => {
        newState[metric.static_name].data = {
            ...metric,
        }
    });
    return newState
}

export const toggleMetricReducer = (state, metricName) => {
    const metric = state[metricName];
    const newMetricToggle = !metric.toggled;
    const newState = {
        ...state,
        [metricName]: {
            ...metric,
            toggled: newMetricToggle,
        }
    }
    return newState
}

export const toggleTimescaleReducer = (state, timescale) => {
    if (!timescale) {
        return state
    }
    const newState = {
        ...state,
        timescale,
    }
    return newState
}

export default function metricsReducer (state = initialState, action) {
    switch(action.type) {
        case TOGGLE_METRIC:
            return toggleMetricReducer(state, action.payload.metricName)
        case STORE_METRICS:
            return storeMetricsReducer(state, action.payload.metrics);
        case TOGGLE_TIMESCALE:
            return toggleTimescaleReducer(state, action.payload.timescale);
        default:
            return state;
        break;
    }
    return state
}
