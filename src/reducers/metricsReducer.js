const initialMetricState = {
    toggled: true,
    data: {},
};

export const initialState = {
    HARD_DRIVE_SPACE: {...initialMetricState},
    NETWORK_UTILIZATION: {...initialMetricState},
    MEMORY_UTILIZATION: {...initialMetricState},
    CPU_UTILIZATION: {...initialMetricState},
}

export const TOGGLE_METRIC = 'TOGGLE_METRIC'

export const toggleMetric = (metricName) => ({
    type: TOGGLE_METRIC,
    payload: {
        metricName,
    }
})

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
    return newState;
}

export default function metricsReducer (state = initialState, action) {
    switch(action.type) {
        case TOGGLE_METRIC:
            const newState = toggleMetricReducer(state, action.payload.metricName)
            return newState;
        default:
            return state;
        break;
    }
    return state
}
