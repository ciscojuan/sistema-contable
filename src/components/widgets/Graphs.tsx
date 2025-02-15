export const CircleChart = () => {
  return (
    <div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      style={{ opacity: "1", willChange: "auto", transform: "none" }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Category Distribution
      </h2>
      <div className="h-80">
        <div
          className="recharts-responsive-container"
          style={{ width: "100%", height: "100%", minWidth: "0px" }}
        >
          <div
            className="recharts-wrapper"
            style={{
              position: "relative",
              cursor: "default",
              width: "100%",
              height: "100%",
              maxHeight: "320px",
              maxWidth: "425px",
            }}
          >
            <svg
              cx="50%"
              cy="50%"
              className="recharts-surface"
              width="425"
              height="320"
              viewBox="0 0 425 320"
              style={{ width: "100%", height: "100%" }}
            >
              <title></title>
              <desc></desc>
              <defs>
                <clipPath id="recharts13-clip">
                  <rect x="5" y="5" height="262" width="415"></rect>
                </clipPath>
              </defs>
              <g className="recharts-layer recharts-pie" tabIndex={0}>
                <g className="recharts-layer">
                  <g
                    className="recharts-layer recharts-pie-sector"
                    tabIndex={1}
                  >
                    <path
                      cx="212.5"
                      cy="136"
                      name="Electronics"
                      fill="#6366F1"
                      stroke="#fff"
                      tabIndex={1}
                      className="recharts-sector"
                      d="M 292.5,136
    A 80,80,0,
    0,0,
    182.88894757280684,61.68186241465669
  L 212.5,136 Z"
                      role="img"
                    ></path>
                  </g>
                  <g
                    className="recharts-layer recharts-pie-sector"
                    tabIndex={1}
                  >
                    <path
                      cx="212.5"
                      cy="136"
                      name="Clothing"
                      fill="#8B5CF6"
                      stroke="#fff"
                      tabIndex={1}
                      className="recharts-sector"
                      d="M 182.88894757280684,61.68186241465669
    A 80,80,0,
    0,0,
    134.01611522510086,151.5009622488527
  L 212.5,136 Z"
                      role="img"
                    ></path>
                  </g>
                  <g
                    className="recharts-layer recharts-pie-sector"
                    tabIndex={1}
                  >
                    <path
                      cx="212.5"
                      cy="136"
                      name="Home &amp; Garden"
                      fill="#EC4899"
                      stroke="#fff"
                      tabIndex={1}
                      className="recharts-sector"
                      d="M 134.01611522510086,151.5009622488527
    A 80,80,0,
    0,0,
    199.5574402757789,214.94612180332211
  L 212.5,136 Z"
                      role="img"
                    ></path>
                  </g>
                  <g
                    className="recharts-layer recharts-pie-sector"
                    tabIndex={1}
                  >
                    <path
                      cx="212.5"
                      cy="136"
                      name="Books"
                      fill="#10B981"
                      stroke="#fff"
                      tabIndex={1}
                      className="recharts-sector"
                      d="M 199.5574402757789,214.94612180332211
    A 80,80,0,
    0,0,
    266.88355956124065,194.67221190179373
  L 212.5,136 Z"
                      role="img"
                    ></path>
                  </g>
                  <g
                    className="recharts-layer recharts-pie-sector"
                    tabIndex={1}
                  >
                    <path
                      cx="212.5"
                      cy="136"
                      name="Sports &amp; Outdoors"
                      fill="#F59E0B"
                      stroke="#fff"
                      tabIndex={1}
                      className="recharts-sector"
                      d="M 266.88355956124065,194.67221190179373
    A 80,80,0,
    0,0,
    292.5,135.99999999999994
  L 212.5,136 Z"
                      role="img"
                    ></path>
                  </g>
                </g>
                <g className="recharts-layer recharts-pie-labels">
                  <g className="recharts-layer">
                    <text
                      cx="212.5"
                      cy="136"
                      stroke="none"
                      name="Electronics"
                      alignmentBaseline="middle"
                      x="268.6187065362382"
                      y="53.23110018431095"
                      className="recharts-text recharts-pie-label-text"
                      textAnchor="start"
                      fill="#6366F1"
                    >
                      <tspan x="268.6187065362382" dy="0em">
                        Electronics 31%
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer">
                    <text
                      cx="212.5"
                      cy="136"
                      stroke="none"
                      name="Clothing"
                      alignmentBaseline="middle"
                      x="124.66140035609536"
                      y="88.20480764137638"
                      className="recharts-text recharts-pie-label-text"
                      textAnchor="end"
                      fill="#8B5CF6"
                    >
                      <tspan x="124.66140035609536" dy="0em">
                        Clothing 22%
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer">
                    <text
                      cx="212.5"
                      cy="136"
                      stroke="none"
                      name="Home &amp; Garden"
                      alignmentBaseline="middle"
                      x="142.94762813892618"
                      y="207.8503136283963"
                      className="recharts-text recharts-pie-label-text"
                      textAnchor="end"
                      fill="#EC4899"
                    >
                      <tspan x="142.94762813892618" dy="0em">
                        Home &amp; Garden 19%
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer">
                    <text
                      cx="212.5"
                      cy="136"
                      stroke="none"
                      name="Books"
                      alignmentBaseline="middle"
                      x="241.3340340501352"
                      y="231.75279881233575"
                      className="recharts-text recharts-pie-label-text"
                      textAnchor="start"
                      fill="#10B981"
                    >
                      <tspan x="241.3340340501352" dy="0em">
                        Books 14%
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer">
                    <text
                      cx="212.5"
                      cy="136"
                      stroke="none"
                      name="Sports &amp; Outdoors"
                      alignmentBaseline="middle"
                      x="304.14590810602266"
                      y="176.0128420313085"
                      className="recharts-text recharts-pie-label-text"
                      textAnchor="start"
                      fill="#F59E0B"
                    >
                      <tspan x="304.14590810602266" dy="0em">
                        Sports &amp; Outdoors 13%
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
            </svg>
            <div
              className="recharts-legend-wrapper"
              style={{
                position: "absolute",
                width: "415px",
                height: "auto",
                left: "5px",
                bottom: "5px",
              }}
            >
              <ul
                className="recharts-default-legend"
                style={{ padding: "0px", margin: "0px", textAlign: "center" }}
              >
                <li
                  className="recharts-legend-item legend-item-0"
                  style={{ display: "inline-block", marginRight: "10px" }}
                >
                  <svg
                    className="recharts-surface"
                    width="14"
                    height="14"
                    viewBox="0 0 32 32"
                    style={{
                      display: "inline-block",
                      verticalAlign: "middle",
                      marginRight: "4px",
                    }}
                  >
                    <title></title>
                    <desc></desc>
                    <path
                      stroke="none"
                      fill="#6366F1"
                      d="M0,4h32v24h-32z"
                      className="recharts-legend-icon"
                    ></path>
                  </svg>
                  <span
                    className="recharts-legend-item-text"
                    style={{ color: "rgb(99, 102, 241)" }}
                  >
                    Electronics
                  </span>
                </li>
                <li
                  className="recharts-legend-item legend-item-1"
                  style={{ display: "inline-block", marginRight: "10px" }}
                >
                  <svg
                    className="recharts-surface"
                    width="14"
                    height="14"
                    viewBox="0 0 32 32"
                    style={{
                      display: "inline-block",
                      verticalAlign: "middle",
                      marginRight: "4px",
                    }}
                  >
                    <title></title>
                    <desc></desc>
                    <path
                      stroke="none"
                      fill="#8B5CF6"
                      d="M0,4h32v24h-32z"
                      className="recharts-legend-icon"
                    ></path>
                  </svg>
                  <span
                    className="recharts-legend-item-text"
                    style={{ color: "rgb(139, 92, 246)" }}
                  >
                    Clothing
                  </span>
                </li>
                <li
                  className="recharts-legend-item legend-item-2"
                  style={{ display: "inline-block", marginRight: "10px" }}
                >
                  <svg
                    className="recharts-surface"
                    width="14"
                    height="14"
                    viewBox="0 0 32 32"
                    style={{
                      display: "inline-block",
                      verticalAlign: "middle",
                      marginRight: "4px",
                    }}
                  >
                    <title></title>
                    <desc></desc>
                    <path
                      stroke="none"
                      fill="#EC4899"
                      d="M0,4h32v24h-32z"
                      className="recharts-legend-icon"
                    ></path>
                  </svg>
                  <span
                    className="recharts-legend-item-text"
                    style={{ color: "rgb(236, 72, 153)" }}
                  >
                    Home &amp; Garden
                  </span>
                </li>
                <li
                  className="recharts-legend-item legend-item-3"
                  style={{ display: "inline-block", marginRight: "10px" }}
                >
                  <svg
                    className="recharts-surface"
                    width="14"
                    height="14"
                    viewBox="0 0 32 32"
                    style={{
                      display: "inline-block",
                      verticalAlign: "middle",
                      marginRight: "4px",
                    }}
                  >
                    <title></title>
                    <desc></desc>
                    <path
                      stroke="none"
                      fill="#10B981"
                      d="M0,4h32v24h-32z"
                      className="recharts-legend-icon"
                    ></path>
                  </svg>
                  <span
                    className="recharts-legend-item-text"
                    style={{ color: "rgb(16, 185, 129)" }}
                  >
                    Books
                  </span>
                </li>
                <li
                  className="recharts-legend-item legend-item-4"
                  style={{ display: "inline-block", marginRight: "10px" }}
                >
                  <svg
                    className="recharts-surface"
                    width="14"
                    height="14"
                    viewBox="0 0 32 32"
                    style={{
                      display: "inline-block",
                      verticalAlign: "middle",
                      marginRight: "4px",
                    }}
                  >
                    <title></title>
                    <desc></desc>
                    <path
                      stroke="none"
                      fill="#F59E0B"
                      d="M0,4h32v24h-32z"
                      className="recharts-legend-icon"
                    ></path>
                  </svg>
                  <span
                    className="recharts-legend-item-text"
                    style={{ color: "rgb(245, 158, 11)" }}
                  >
                    Sports &amp; Outdoors
                  </span>
                </li>
              </ul>
            </div>
            <div
              tabIndex={1}
              className="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-bottom"
              style={{
                visibility: "hidden",
                pointerEvents: "none",
                position: "absolute",
                top: "0px",
                left: "0px",
                transform: " translate(10px, 10px)",
              }}
            >
              <div
                className="recharts-default-tooltip"
                style={{
                  margin: "0px",
                  padding: "10px",
                  backgroundColor: "rgba(31, 41, 55, 0.8)",
                  border: "1px solid rgb(75, 85, 99)",
                  whiteSpace: "nowrap",
                }}
              >
                <p
                  className="recharts-tooltip-label"
                  style={{ margin: "0px" }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LinearChart = () => {
  return (
    <div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      style={{ opacity: "1", willChange: "auto", transform: "none" }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">Sales Trend</h2>
      <div style={{ width: "100%", height: "300px" }}>
        <div
          className="recharts-responsive-container"
          style={{ width: "100%", height: "100%", minWidth: "0px" }}
        >
          <div
            className="recharts-wrapper"
            style={{
              position: "relative",
              cursor: "default",
              width: "100%",
              height: "100%",
              maxHeight: "300px",
              maxWidth: "425px",
            }}
          >
            <svg
              className="recharts-surface"
              width="425"
              height="300"
              viewBox="0 0 425 300"
              style={{ width: "100%", height: "100%" }}
            >
              <title></title>
              <desc></desc>
              <defs>
                <clipPath id="recharts10-clip">
                  <rect x="65" y="5" height="236" width="355"></rect>
                </clipPath>
              </defs>
              <g className="recharts-cartesian-grid">
                <g className="recharts-cartesian-grid-horizontal">
                  <line
                    strokeDasharray="3 3"
                    stroke="#374151"
                    fill="none"
                    x="65"
                    y="5"
                    width="355"
                    height="236"
                    x1="65"
                    y1="241"
                    x2="420"
                    y2="241"
                  ></line>
                  <line
                    strokeDasharray="3 3"
                    stroke="#374151"
                    fill="none"
                    x="65"
                    y="5"
                    width="355"
                    height="236"
                    x1="65"
                    y1="182"
                    x2="420"
                    y2="182"
                  ></line>
                  <line
                    strokeDasharray="3 3"
                    stroke="#374151"
                    fill="none"
                    x="65"
                    y="5"
                    width="355"
                    height="236"
                    x1="65"
                    y1="123"
                    x2="420"
                    y2="123"
                  ></line>
                  <line
                    strokeDasharray="3 3"
                    stroke="#374151"
                    fill="none"
                    x="65"
                    y="5"
                    width="355"
                    height="236"
                    x1="65"
                    y1="64"
                    x2="420"
                    y2="64"
                  ></line>
                  <line
                    strokeDasharray="3 3"
                    stroke="#374151"
                    fill="none"
                    x="65"
                    y="5"
                    width="355"
                    height="236"
                    x1="65"
                    y1="5"
                    x2="420"
                    y2="5"
                  ></line>
                </g>
                <g className="recharts-cartesian-grid-vertical">
                  <line
                    strokeDasharray="3 3"
                    stroke="#374151"
                    fill="none"
                    x="65"
                    y="5"
                    width="355"
                    height="236"
                    x1="65"
                    y1="5"
                    x2="65"
                    y2="241"
                  ></line>
                  <line
                    strokeDasharray="3 3"
                    stroke="#374151"
                    fill="none"
                    x="65"
                    y="5"
                    width="355"
                    height="236"
                    x1="136"
                    y1="5"
                    x2="136"
                    y2="241"
                  ></line>
                  <line
                    strokeDasharray="3 3"
                    stroke="#374151"
                    fill="none"
                    x="65"
                    y="5"
                    width="355"
                    height="236"
                    x1="207"
                    y1="5"
                    x2="207"
                    y2="241"
                  ></line>
                  <line
                    strokeDasharray="3 3"
                    stroke="#374151"
                    fill="none"
                    x="65"
                    y="5"
                    width="355"
                    height="236"
                    x1="278"
                    y1="5"
                    x2="278"
                    y2="241"
                  ></line>
                  <line
                    strokeDasharray="3 3"
                    stroke="#374151"
                    fill="none"
                    x="65"
                    y="5"
                    width="355"
                    height="236"
                    x1="349"
                    y1="5"
                    x2="349"
                    y2="241"
                  ></line>
                  <line
                    strokeDasharray="3 3"
                    stroke="#374151"
                    fill="none"
                    x="65"
                    y="5"
                    width="355"
                    height="236"
                    x1="420"
                    y1="5"
                    x2="420"
                    y2="241"
                  ></line>
                </g>
              </g>
              <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                <line
                  stroke="#9CA3AF"
                  orientation="bottom"
                  width="355"
                  height="30"
                  x="65"
                  y="241"
                  className="recharts-cartesian-axis-line"
                  fill="none"
                  x1="65"
                  y1="241"
                  x2="420"
                  y2="241"
                ></line>
                <g className="recharts-cartesian-axis-ticks">
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line
                      stroke="#9CA3AF"
                      orientation="bottom"
                      width="355"
                      height="30"
                      x="65"
                      y="241"
                      className="recharts-cartesian-axis-tick-line"
                      fill="none"
                      x1="65"
                      y1="247"
                      x2="65"
                      y2="241"
                    ></line>
                    <text
                      stroke="none"
                      orientation="bottom"
                      width="355"
                      height="30"
                      x="65"
                      y="249"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      textAnchor="middle"
                      fill="#9CA3AF"
                    >
                      <tspan x="65" dy="0.71em">
                        Jan
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line
                      stroke="#9CA3AF"
                      orientation="bottom"
                      width="355"
                      height="30"
                      x="65"
                      y="241"
                      className="recharts-cartesian-axis-tick-line"
                      fill="none"
                      x1="136"
                      y1="247"
                      x2="136"
                      y2="241"
                    ></line>
                    <text
                      stroke="none"
                      orientation="bottom"
                      width="355"
                      height="30"
                      x="136"
                      y="249"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      textAnchor="middle"
                      fill="#9CA3AF"
                    >
                      <tspan x="136" dy="0.71em">
                        Feb
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line
                      stroke="#9CA3AF"
                      orientation="bottom"
                      width="355"
                      height="30"
                      x="65"
                      y="241"
                      className="recharts-cartesian-axis-tick-line"
                      fill="none"
                      x1="207"
                      y1="247"
                      x2="207"
                      y2="241"
                    ></line>
                    <text
                      stroke="none"
                      orientation="bottom"
                      width="355"
                      height="30"
                      x="207"
                      y="249"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      textAnchor="middle"
                      fill="#9CA3AF"
                    >
                      <tspan x="207" dy="0.71em">
                        Mar
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line
                      stroke="#9CA3AF"
                      orientation="bottom"
                      width="355"
                      height="30"
                      x="65"
                      y="241"
                      className="recharts-cartesian-axis-tick-line"
                      fill="none"
                      x1="278"
                      y1="247"
                      x2="278"
                      y2="241"
                    ></line>
                    <text
                      stroke="none"
                      orientation="bottom"
                      width="355"
                      height="30"
                      x="278"
                      y="249"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      textAnchor="middle"
                      fill="#9CA3AF"
                    >
                      <tspan x="278" dy="0.71em">
                        Apr
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line
                      stroke="#9CA3AF"
                      orientation="bottom"
                      width="355"
                      height="30"
                      x="65"
                      y="241"
                      className="recharts-cartesian-axis-tick-line"
                      fill="none"
                      x1="349"
                      y1="247"
                      x2="349"
                      y2="241"
                    ></line>
                    <text
                      stroke="none"
                      orientation="bottom"
                      width="355"
                      height="30"
                      x="349"
                      y="249"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      textAnchor="middle"
                      fill="#9CA3AF"
                    >
                      <tspan x="349" dy="0.71em">
                        May
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line
                      stroke="#9CA3AF"
                      orientation="bottom"
                      width="355"
                      height="30"
                      x="65"
                      y="241"
                      className="recharts-cartesian-axis-tick-line"
                      fill="none"
                      x1="420"
                      y1="247"
                      x2="420"
                      y2="241"
                    ></line>
                    <text
                      stroke="none"
                      orientation="bottom"
                      width="355"
                      height="30"
                      x="411.8125"
                      y="249"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      textAnchor="middle"
                      fill="#9CA3AF"
                    >
                      <tspan x="411.8125" dy="0.71em">
                        Jun
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
              <g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                <line
                  stroke="#9CA3AF"
                  orientation="left"
                  width="60"
                  height="236"
                  x="5"
                  y="5"
                  className="recharts-cartesian-axis-line"
                  fill="none"
                  x1="65"
                  y1="5"
                  x2="65"
                  y2="241"
                ></line>
                <g className="recharts-cartesian-axis-ticks">
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line
                      stroke="#9CA3AF"
                      orientation="left"
                      width="60"
                      height="236"
                      x="5"
                      y="5"
                      className="recharts-cartesian-axis-tick-line"
                      fill="none"
                      x1="59"
                      y1="241"
                      x2="65"
                      y2="241"
                    ></line>
                    <text
                      stroke="none"
                      orientation="left"
                      width="60"
                      height="236"
                      x="57"
                      y="241"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      textAnchor="end"
                      fill="#9CA3AF"
                    >
                      <tspan x="57" dy="0.355em">
                        0
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line
                      stroke="#9CA3AF"
                      orientation="left"
                      width="60"
                      height="236"
                      x="5"
                      y="5"
                      className="recharts-cartesian-axis-tick-line"
                      fill="none"
                      x1="59"
                      y1="182"
                      x2="65"
                      y2="182"
                    ></line>
                    <text
                      stroke="none"
                      orientation="left"
                      width="60"
                      height="236"
                      x="57"
                      y="182"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      textAnchor="end"
                      fill="#9CA3AF"
                    >
                      <tspan x="57" dy="0.355em">
                        1500
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line
                      stroke="#9CA3AF"
                      orientation="left"
                      width="60"
                      height="236"
                      x="5"
                      y="5"
                      className="recharts-cartesian-axis-tick-line"
                      fill="none"
                      x1="59"
                      y1="123"
                      x2="65"
                      y2="123"
                    ></line>
                    <text
                      stroke="none"
                      orientation="left"
                      width="60"
                      height="236"
                      x="57"
                      y="123"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      textAnchor="end"
                      fill="#9CA3AF"
                    >
                      <tspan x="57" dy="0.355em">
                        3000
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line
                      stroke="#9CA3AF"
                      orientation="left"
                      width="60"
                      height="236"
                      x="5"
                      y="5"
                      className="recharts-cartesian-axis-tick-line"
                      fill="none"
                      x1="59"
                      y1="64"
                      x2="65"
                      y2="64"
                    ></line>
                    <text
                      stroke="none"
                      orientation="left"
                      width="60"
                      height="236"
                      x="57"
                      y="64"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      textAnchor="end"
                      fill="#9CA3AF"
                    >
                      <tspan x="57" dy="0.355em">
                        4500
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line
                      stroke="#9CA3AF"
                      orientation="left"
                      width="60"
                      height="236"
                      x="5"
                      y="5"
                      className="recharts-cartesian-axis-tick-line"
                      fill="none"
                      x1="59"
                      y1="5"
                      x2="65"
                      y2="5"
                    ></line>
                    <text
                      stroke="none"
                      orientation="left"
                      width="60"
                      height="236"
                      x="57"
                      y="12"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      textAnchor="end"
                      fill="#9CA3AF"
                    >
                      <tspan x="57" dy="0.355em">
                        6000
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
              <g className="recharts-layer recharts-line">
                <path
                  stroke="#8B5CF6"
                  strokeWidth="2"
                  fill="none"
                  width="355"
                  height="236"
                  className="recharts-curve recharts-line-curve"
                  d="M65,83.667C88.667,103.333,112.333,123,136,123C159.667,123,183.333,44.333,207,44.333C230.667,44.333,254.333,64,278,64C301.667,64,325.333,5,349,5C372.667,5,396.333,14.833,420,24.667"
                ></path>
                <g className="recharts-layer"></g>
                <g className="recharts-layer recharts-line-dots">
                  <circle
                    r="3"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    fill="#fff"
                    width="355"
                    height="236"
                    cx="65"
                    cy="83.66666666666667"
                    className="recharts-dot recharts-line-dot"
                  ></circle>
                  <circle
                    r="3"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    fill="#fff"
                    width="355"
                    height="236"
                    cx="136"
                    cy="123"
                    className="recharts-dot recharts-line-dot"
                  ></circle>
                  <circle
                    r="3"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    fill="#fff"
                    width="355"
                    height="236"
                    cx="207"
                    cy="44.33333333333332"
                    className="recharts-dot recharts-line-dot"
                  ></circle>
                  <circle
                    r="3"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    fill="#fff"
                    width="355"
                    height="236"
                    cx="278"
                    cy="64"
                    className="recharts-dot recharts-line-dot"
                  ></circle>
                  <circle
                    r="3"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    fill="#fff"
                    width="355"
                    height="236"
                    cx="349"
                    cy="5"
                    className="recharts-dot recharts-line-dot"
                  ></circle>
                  <circle
                    r="3"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    fill="#fff"
                    width="355"
                    height="236"
                    cx="420"
                    cy="24.666666666666675"
                    className="recharts-dot recharts-line-dot"
                  ></circle>
                </g>
              </g>
            </svg>
            <div
              className="recharts-legend-wrapper"
              style={{
                position: "absolute",
                width: "415px",
                height: "auto",
                left: "5px",
                bottom: "5px",
              }}
            >
              <ul
                className="recharts-default-legend"
                style={{ padding: "0px", margin: "0px", textAlign: "center" }}
              >
                <li
                  className="recharts-legend-item legend-item-0"
                  style={{ display: "inline-block", marginRight: "10px" }}
                >
                  <svg
                    className="recharts-surface"
                    width="14"
                    height="14"
                    viewBox="0 0 32 32"
                    style={{
                      display: "inline-block",
                      verticalAlign: "middle",
                      marginRight: "4px",
                    }}
                  >
                    <title></title>
                    <desc></desc>
                    <path
                      strokeWidth="4"
                      fill="none"
                      stroke="#8B5CF6"
                      d="M0,16h10.666666666666666
            A5.333333333333333,5.333333333333333,0,1,1,21.333333333333332,16
            H32M21.333333333333332,16
            A5.333333333333333,5.333333333333333,0,1,1,10.666666666666666,16"
                      className="recharts-legend-icon"
                    ></path>
                  </svg>
                  <span
                    className="recharts-legend-item-text"
                    style={{ color: "rgb(139, 92, 246)" }}
                  >
                    sales
                  </span>
                </li>
              </ul>
            </div>
            <div
              tabIndex={1}
              className="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-bottom"
              style={{
                visibility: "hidden",
                pointerEvents: "none",
                position: "absolute",
                top: "0px",
                left: "0px",
                transform: "translate(217px, 16px)",
              }}
            >
              <div
                className="recharts-default-tooltip"
                style={{
                  margin: "0px",
                  padding: "10px",
                  backgroundColor: "rgba(31, 41, 55, 0.8)",
                  border: "1px solid rgb(75, 85, 99)",
                  whiteSpace: "nowrap",
                }}
              >
                <p className="recharts-tooltip-label" style={{ margin: "0px" }}>
                  Mar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BarChart = () => {
  return (
    <div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700"
      style={{ opacity: "1", willChange: "auto", transform: "none" }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">
        Sales by Channel
      </h2>
      <div className="h-80">
        <div
          className="recharts-responsive-container"
          style={{ width: "100%", height: "100%", minWidth: "0px" }}
        >
          <div
            className="recharts-wrapper"
            style={{
              position: "relative",
              cursor: "default",
              width: "100%",
              height: "100%",
              maxHeight: "320px",
              maxWidth: "1059px",
            }}
          >
            <svg
              className="recharts-surface"
              width="1059"
              height="320"
              viewBox="0 0 1059 320"
              style={{ width: "100%", height: "100%" }}
            >
              <title></title>
              <desc></desc>
              <defs>
                <clipPath id="recharts53-clip">
                  <rect x="65" y="5" height="256" width="989"></rect>
                </clipPath>
              </defs>
              <g className="recharts-cartesian-grid">
                <g className="recharts-cartesian-grid-horizontal">
                  <line
                    strokeDasharray="3 3"
                    stroke="#4B5563"
                    fill="none"
                    x="65"
                    y="5"
                    width="989"
                    height="256"
                    x1="65"
                    y1="261"
                    x2="1054"
                    y2="261"
                  ></line>
                  <line
                    strokeDasharray="3 3"
                    stroke="#4B5563"
                    fill="none"
                    x="65"
                    y="5"
                    width="989"
                    height="256"
                    x1="65"
                    y1="197"
                    x2="1054"
                    y2="197"
                  ></line>
                  <line
                    strokeDasharray="3 3"
                    stroke="#4B5563"
                    fill="none"
                    x="65"
                    y="5"
                    width="989"
                    height="256"
                    x1="65"
                    y1="133"
                    x2="1054"
                    y2="133"
                  ></line>
                  <line
                    strokeDasharray="3 3"
                    stroke="#4B5563"
                    fill="none"
                    x="65"
                    y="5"
                    width="989"
                    height="256"
                    x1="65"
                    y1="69"
                    x2="1054"
                    y2="69"
                  ></line>
                  <line
                    strokeDasharray="3 3"
                    stroke="#4B5563"
                    fill="none"
                    x="65"
                    y="5"
                    width="989"
                    height="256"
                    x1="65"
                    y1="5"
                    x2="1054"
                    y2="5"
                  ></line>
                </g>
                <g className="recharts-cartesian-grid-vertical">
                  <line
                    strokeDasharray="3 3"
                    stroke="#4B5563"
                    fill="none"
                    x="65"
                    y="5"
                    width="989"
                    height="256"
                    x1="188.625"
                    y1="5"
                    x2="188.625"
                    y2="261"
                  ></line>
                  <line
                    strokeDasharray="3 3"
                    stroke="#4B5563"
                    fill="none"
                    x="65"
                    y="5"
                    width="989"
                    height="256"
                    x1="435.875"
                    y1="5"
                    x2="435.875"
                    y2="261"
                  ></line>
                  <line
                    strokeDasharray="3 3"
                    stroke="#4B5563"
                    fill="none"
                    x="65"
                    y="5"
                    width="989"
                    height="256"
                    x1="683.125"
                    y1="5"
                    x2="683.125"
                    y2="261"
                  ></line>
                  <line
                    strokeDasharray="3 3"
                    stroke="#4B5563"
                    fill="none"
                    x="65"
                    y="5"
                    width="989"
                    height="256"
                    x1="930.375"
                    y1="5"
                    x2="930.375"
                    y2="261"
                  ></line>
                  <line
                    strokeDasharray="3 3"
                    stroke="#4B5563"
                    fill="none"
                    x="65"
                    y="5"
                    width="989"
                    height="256"
                    x1="65"
                    y1="5"
                    x2="65"
                    y2="261"
                  ></line>
                  <line
                    strokeDasharray="3 3"
                    stroke="#4B5563"
                    fill="none"
                    x="65"
                    y="5"
                    width="989"
                    height="256"
                    x1="1054"
                    y1="5"
                    x2="1054"
                    y2="261"
                  ></line>
                </g>
              </g>
              <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                <line
                  stroke="#9CA3AF"
                  orientation="bottom"
                  width="989"
                  height="30"
                  x="65"
                  y="261"
                  className="recharts-cartesian-axis-line"
                  fill="none"
                  x1="65"
                  y1="261"
                  x2="1054"
                  y2="261"
                ></line>
                <g className="recharts-cartesian-axis-ticks">
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line
                      stroke="#9CA3AF"
                      orientation="bottom"
                      width="989"
                      height="30"
                      x="65"
                      y="261"
                      className="recharts-cartesian-axis-tick-line"
                      fill="none"
                      x1="188.625"
                      y1="267"
                      x2="188.625"
                      y2="261"
                    ></line>
                    <text
                      stroke="none"
                      orientation="bottom"
                      width="989"
                      height="30"
                      x="188.625"
                      y="269"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      textAnchor="middle"
                      fill="#9CA3AF"
                    >
                      <tspan x="188.625" dy="0.71em">
                        Website
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line
                      stroke="#9CA3AF"
                      orientation="bottom"
                      width="989"
                      height="30"
                      x="65"
                      y="261"
                      className="recharts-cartesian-axis-tick-line"
                      fill="none"
                      x1="435.875"
                      y1="267"
                      x2="435.875"
                      y2="261"
                    ></line>
                    <text
                      stroke="none"
                      orientation="bottom"
                      width="989"
                      height="30"
                      x="435.875"
                      y="269"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      textAnchor="middle"
                      fill="#9CA3AF"
                    >
                      <tspan x="435.875" dy="0.71em">
                        Mobile App
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line
                      stroke="#9CA3AF"
                      orientation="bottom"
                      width="989"
                      height="30"
                      x="65"
                      y="261"
                      className="recharts-cartesian-axis-tick-line"
                      fill="none"
                      x1="683.125"
                      y1="267"
                      x2="683.125"
                      y2="261"
                    ></line>
                    <text
                      stroke="none"
                      orientation="bottom"
                      width="989"
                      height="30"
                      x="683.125"
                      y="269"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      textAnchor="middle"
                      fill="#9CA3AF"
                    >
                      <tspan x="683.125" dy="0.71em">
                        Marketplace
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line
                      stroke="#9CA3AF"
                      orientation="bottom"
                      width="989"
                      height="30"
                      x="65"
                      y="261"
                      className="recharts-cartesian-axis-tick-line"
                      fill="none"
                      x1="930.375"
                      y1="267"
                      x2="930.375"
                      y2="261"
                    ></line>
                    <text
                      stroke="none"
                      orientation="bottom"
                      width="989"
                      height="30"
                      x="930.375"
                      y="269"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      textAnchor="middle"
                      fill="#9CA3AF"
                    >
                      <tspan x="930.375" dy="0.71em">
                        Social Media
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
              <g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                <line
                  stroke="#9CA3AF"
                  orientation="left"
                  width="60"
                  height="256"
                  x="5"
                  y="5"
                  className="recharts-cartesian-axis-line"
                  fill="none"
                  x1="65"
                  y1="5"
                  x2="65"
                  y2="261"
                ></line>
                <g className="recharts-cartesian-axis-ticks">
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line
                      stroke="#9CA3AF"
                      orientation="left"
                      width="60"
                      height="256"
                      x="5"
                      y="5"
                      className="recharts-cartesian-axis-tick-line"
                      fill="none"
                      x1="59"
                      y1="261"
                      x2="65"
                      y2="261"
                    ></line>
                    <text
                      stroke="none"
                      orientation="left"
                      width="60"
                      height="256"
                      x="57"
                      y="261"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      textAnchor="end"
                      fill="#9CA3AF"
                    >
                      <tspan x="57" dy="0.355em">
                        0
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line
                      stroke="#9CA3AF"
                      orientation="left"
                      width="60"
                      height="256"
                      x="5"
                      y="5"
                      className="recharts-cartesian-axis-tick-line"
                      fill="none"
                      x1="59"
                      y1="197"
                      x2="65"
                      y2="197"
                    ></line>
                    <text
                      stroke="none"
                      orientation="left"
                      width="60"
                      height="256"
                      x="57"
                      y="197"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      textAnchor="end"
                      fill="#9CA3AF"
                    >
                      <tspan x="57" dy="0.355em">
                        15000
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line
                      stroke="#9CA3AF"
                      orientation="left"
                      width="60"
                      height="256"
                      x="5"
                      y="5"
                      className="recharts-cartesian-axis-tick-line"
                      fill="none"
                      x1="59"
                      y1="133"
                      x2="65"
                      y2="133"
                    ></line>
                    <text
                      stroke="none"
                      orientation="left"
                      width="60"
                      height="256"
                      x="57"
                      y="133"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      textAnchor="end"
                      fill="#9CA3AF"
                    >
                      <tspan x="57" dy="0.355em">
                        30000
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line
                      stroke="#9CA3AF"
                      orientation="left"
                      width="60"
                      height="256"
                      x="5"
                      y="5"
                      className="recharts-cartesian-axis-tick-line"
                      fill="none"
                      x1="59"
                      y1="69"
                      x2="65"
                      y2="69"
                    ></line>
                    <text
                      stroke="none"
                      orientation="left"
                      width="60"
                      height="256"
                      x="57"
                      y="69"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      textAnchor="end"
                      fill="#9CA3AF"
                    >
                      <tspan x="57" dy="0.355em">
                        45000
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <line
                      stroke="#9CA3AF"
                      orientation="left"
                      width="60"
                      height="256"
                      x="5"
                      y="5"
                      className="recharts-cartesian-axis-tick-line"
                      fill="none"
                      x1="59"
                      y1="5"
                      x2="65"
                      y2="5"
                    ></line>
                    <text
                      stroke="none"
                      orientation="left"
                      width="60"
                      height="256"
                      x="57"
                      y="12"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      textAnchor="end"
                      fill="#9CA3AF"
                    >
                      <tspan x="57" dy="0.355em">
                        60000
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
              <g className="recharts-layer recharts-bar">
                <g className="recharts-layer recharts-bar-rectangles">
                  <g className="recharts-layer">
                    <g className="recharts-layer recharts-bar-rectangle">
                      <path
                        x="89.725"
                        y="66.44"
                        width="197"
                        height="194.56"
                        radius="0"
                        fill="#6366F1"
                        name="Website"
                        className="recharts-rectangle"
                        d="M 89.725,66.44 h 197 v 194.56 h -197 Z"
                      ></path>
                    </g>
                    <g className="recharts-layer recharts-bar-rectangle">
                      <path
                        x="336.975"
                        y="98.01333333333332"
                        width="197"
                        height="162.98666666666668"
                        radius="0"
                        fill="#8B5CF6"
                        name="Mobile App"
                        className="recharts-rectangle"
                        d="M 336.975,98.01333333333332 h 197 v 162.98666666666668 h -197 Z"
                      ></path>
                    </g>
                    <g className="recharts-layer recharts-bar-rectangle">
                      <path
                        x="584.225"
                        y="133.85333333333335"
                        width="197"
                        height="127.14666666666665"
                        radius="0"
                        fill="#EC4899"
                        name="Marketplace"
                        className="recharts-rectangle"
                        d="M 584.225,133.85333333333335 h 197 v 127.14666666666665 h -197 Z"
                      ></path>
                    </g>
                    <g className="recharts-layer recharts-bar-rectangle">
                      <path
                        x="831.475"
                        y="181.21333333333334"
                        width="197"
                        height="79.78666666666666"
                        radius="0"
                        fill="#10B981"
                        name="Social Media"
                        className="recharts-rectangle"
                        d="M 831.475,181.21333333333334 h 197 v 79.78666666666666 h -197 Z"
                      ></path>
                    </g>
                  </g>
                </g>
                <g className="recharts-layer"></g>
              </g>
            </svg>
            <div
              className="recharts-legend-wrapper"
              style={{
                position: "absolute",
                width: "1049px",
                height: "auto",
                left: " 5px",
                bottom: "5px",
              }}
            >
              <ul
                className="recharts-default-legend"
                style={{ padding: "0px", margin: "0px", textAlign: "center" }}
              >
                <li
                  className="recharts-legend-item legend-item-0"
                  style={{ display: "inline-block", marginRight: "10px" }}
                >
                  <svg
                    className="recharts-surface"
                    width="14"
                    height="14"
                    viewBox="0 0 32 32"
                    style={{
                      display: "inline-block",
                      verticalAlign: "middle",
                      marginRight: "4px",
                    }}
                  >
                    <title></title>
                    <desc></desc>
                    <path
                      stroke="none"
                      fill="#8884d8"
                      d="M0,4h32v24h-32z"
                      className="recharts-legend-icon"
                    ></path>
                  </svg>
                  <span
                    className="recharts-legend-item-text"
                    style={{ color: "rgb(136, 132, 216)" }}
                  >
                    value
                  </span>
                </li>
              </ul>
            </div>
            <div
              tabIndex={-1}
              className="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-bottom"
              style={{
                visibility: "hidden",
                pointerEvents: "none",
                position: "absolute",
                top: "0px",
                left: "0px",
                transform: "translate(693.125px, 48px)",
              }}
            >
              <div
                className="recharts-default-tooltip"
                style={{
                  margin: "0px",
                  padding: "10px",
                  backgroundColor: "rgba(31, 41, 55, 0.8)",
                  border: "1px solid rgb(75, 85, 99",
                  whiteSpace: "nowrap",
                }}
              >
                <p className="recharts-tooltip-label" style={{ margin: "0px" }}>
                  Marketplace
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
