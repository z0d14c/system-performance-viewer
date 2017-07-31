const initialMetricState = {
    toggled: true,
    data: {},
};

const initialState = {
    HARD_DRIVE_SPACE: {...initialMetricState},
    NETWORK_UTILIZATION: {...initialMetricState},
    MEMORY_UTILIZATION: {...initialMetricState},
    CPU_UTILIZATION: {...initialMetricState},
}

export default function metricsReducer (state = initialState, action) {
    return state
}
