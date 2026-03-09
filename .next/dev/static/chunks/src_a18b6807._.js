(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/admin/actions/data:a30cd2 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateProfileAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40ce2c7c00492a5367e172f023aae63759b53d49c4":"updateProfileAction"},"src/app/admin/actions/profile.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40ce2c7c00492a5367e172f023aae63759b53d49c4", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateProfileAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvZmlsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xyXG5pbXBvcnQgeyBhZG1pbkRiIH0gZnJvbSBcIkAvbGliL2ZpcmViYXNlL2FkbWluXCI7XHJcbmltcG9ydCB7IGlzQWRtaW4gfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2ZpbGVBY3Rpb24oZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgY29uc3QgYWRtaW4gPSBhd2FpdCBpc0FkbWluKCk7XHJcbiAgaWYgKCFhZG1pbikgcmV0dXJuIHsgb2s6IGZhbHNlLCBlcnJvcjogXCJOb3QgYXV0aG9yaXplZFwiIH0gYXMgY29uc3Q7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZXMgPSB7XHJcbiAgICBmdWxsX25hbWU6IFN0cmluZyhmb3JtRGF0YS5nZXQoXCJmdWxsX25hbWVcIikgfHwgXCJcIiksXHJcbiAgICBnYW1lcl9uYW1lOiBTdHJpbmcoZm9ybURhdGEuZ2V0KFwiZ2FtZXJfbmFtZVwiKSB8fCBcIlwiKSxcclxuICAgIGdhbWVyX3RpdGxlOiBTdHJpbmcoZm9ybURhdGEuZ2V0KFwiZ2FtZXJfdGl0bGVcIikgfHwgXCJcIiksXHJcbiAgICBiaW86IFN0cmluZyhmb3JtRGF0YS5nZXQoXCJiaW9cIikgfHwgXCJcIiksXHJcbiAgICBjb3VudHJ5OiBTdHJpbmcoZm9ybURhdGEuZ2V0KFwiY291bnRyeVwiKSB8fCBcIlwiKSxcclxuICAgIHByb2ZpbGVfaW1hZ2VfdXJsOiBTdHJpbmcoZm9ybURhdGEuZ2V0KFwicHJvZmlsZV9pbWFnZV91cmxcIikgfHwgXCJcIiksXHJcbiAgICBhZ2U6IGZvcm1EYXRhLmdldChcImFnZVwiKSA/IE51bWJlcihmb3JtRGF0YS5nZXQoXCJhZ2VcIikpIDogbnVsbCxcclxuICAgIHNob3dfcGVyc29uYWw6IFN0cmluZyhmb3JtRGF0YS5nZXQoXCJzaG93X3BlcnNvbmFsXCIpIHx8IFwidHJ1ZVwiKSA9PT0gXCJ0cnVlXCIsXHJcbiAgICBzaG93X2dhbWVzOiBTdHJpbmcoZm9ybURhdGEuZ2V0KFwic2hvd19nYW1lc1wiKSB8fCBcInRydWVcIikgPT09IFwidHJ1ZVwiLFxyXG4gICAgc2hvd19mcmllbmRzOiBTdHJpbmcoZm9ybURhdGEuZ2V0KFwic2hvd19mcmllbmRzXCIpIHx8IFwidHJ1ZVwiKSA9PT0gXCJ0cnVlXCIsXHJcbiAgICBzaG93X21lc3NhZ2VzOiBTdHJpbmcoZm9ybURhdGEuZ2V0KFwic2hvd19tZXNzYWdlc1wiKSB8fCBcInRydWVcIikgPT09IFwidHJ1ZVwiLFxyXG4gICAgdXBkYXRlZF9hdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBhZG1pbkRiLmNvbGxlY3Rpb24oXCJwcm9maWxlXCIpLmRvYyhcIm1haW5cIikuc2V0KHVwZGF0ZXMsIHsgbWVyZ2U6IHRydWUgfSk7XHJcbiAgICByZXZhbGlkYXRlUGF0aChcIi9hZG1pblwiKTtcclxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcclxuICAgIHJldHVybiB7IG9rOiB0cnVlIH0gYXMgY29uc3Q7XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgcmV0dXJuIHsgb2s6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9IGFzIGNvbnN0O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IndTQUtzQixnTUFBQSJ9
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/switch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>Switch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Switch(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "71a92bf5faf716beab026cc514ce3375827e1dd593482fe443cee01da07edc05") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "71a92bf5faf716beab026cc514ce3375827e1dd593482fe443cee01da07edc05";
    }
    let checked;
    let className;
    let defaultChecked;
    let onCheckedChange;
    let props;
    if ($[1] !== t0) {
        ({ checked, defaultChecked, onCheckedChange, className, ...props } = t0);
        $[1] = t0;
        $[2] = checked;
        $[3] = className;
        $[4] = defaultChecked;
        $[5] = onCheckedChange;
        $[6] = props;
    } else {
        checked = $[2];
        className = $[3];
        defaultChecked = $[4];
        onCheckedChange = $[5];
        props = $[6];
    }
    const [internal, setInternal] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](!!defaultChecked);
    let t1;
    let t2;
    if ($[7] !== checked) {
        t1 = ({
            "Switch[useEffect()]": ()=>{
                if (typeof checked === "boolean") {
                    setInternal(checked);
                }
            }
        })["Switch[useEffect()]"];
        t2 = [
            checked
        ];
        $[7] = checked;
        $[8] = t1;
        $[9] = t2;
    } else {
        t1 = $[8];
        t2 = $[9];
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"](t1, t2);
    let t3;
    if ($[10] !== checked || $[11] !== internal || $[12] !== onCheckedChange) {
        t3 = ({
            "Switch[toggle]": ()=>{
                const next = !internal;
                if (typeof checked !== "boolean") {
                    setInternal(next);
                }
                onCheckedChange?.(next);
            }
        })["Switch[toggle]"];
        $[10] = checked;
        $[11] = internal;
        $[12] = onCheckedChange;
        $[13] = t3;
    } else {
        t3 = $[13];
    }
    const toggle = t3;
    const isOn = internal;
    const t4 = isOn ? "bg-purple-600" : "bg-zinc-700";
    let t5;
    if ($[14] !== className || $[15] !== t4) {
        t5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative inline-flex h-6 w-11 items-center rounded-full transition-colors", t4, "focus:outline-none focus:ring-2 focus:ring-purple-500/60 focus:ring-offset-2 focus:ring-offset-black", className);
        $[14] = className;
        $[15] = t4;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    const t6 = isOn ? "translate-x-5" : "translate-x-1";
    let t7;
    if ($[17] !== t6) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-block h-5 w-5 transform rounded-full bg-white shadow transition", t6);
        $[17] = t6;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    let t8;
    if ($[19] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t7
        }, void 0, false, {
            fileName: "[project]/src/components/ui/switch.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[19] = t7;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    let t9;
    if ($[21] !== isOn || $[22] !== props || $[23] !== t5 || $[24] !== t8 || $[25] !== toggle) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            role: "switch",
            "aria-checked": isOn,
            onClick: toggle,
            className: t5,
            ...props,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/ui/switch.tsx",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        $[21] = isOn;
        $[22] = props;
        $[23] = t5;
        $[24] = t8;
        $[25] = toggle;
        $[26] = t9;
    } else {
        t9 = $[26];
    }
    return t9;
}
_s(Switch, "NIKbhHdd50rseKN2y/Jy+gRS2bc=");
_c = Switch;
var _c;
__turbopack_context__.k.register(_c, "Switch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/admin/profile-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileForm",
    ()=>ProfileForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$data$3a$a30cd2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/admin/actions/data:a30cd2 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/switch.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ProfileForm(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(83);
    if ($[0] !== "f6052fe2ca61044b0850af844eff209df1052a9d6e4b5b49e47f32a76b3a3ba1") {
        for(let $i = 0; $i < 83; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f6052fe2ca61044b0850af844eff209df1052a9d6e4b5b49e47f32a76b3a3ba1";
    }
    const { initial } = t0;
    const [state, formAction, pending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"])(_ProfileFormUseActionState, null);
    if (state?.ok) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Profile saved");
    }
    if (state?.error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(state.error);
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm text-zinc-300",
            htmlFor: "full_name",
            children: "Full Name"
        }, void 0, false, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const t2 = initial?.full_name || "";
    let t3;
    if ($[2] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-2",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "full_name",
                    name: "full_name",
                    defaultValue: t2,
                    className: "rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm",
                    required: true
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/profile-form.tsx",
                    lineNumber: 36,
                    columnNumber: 42
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm text-zinc-300",
            htmlFor: "gamer_name",
            children: "Gamer Name"
        }, void 0, false, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const t5 = initial?.gamer_name || "";
    let t6;
    if ($[5] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-2",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "gamer_name",
                    name: "gamer_name",
                    defaultValue: t5,
                    className: "rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm",
                    required: true
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/profile-form.tsx",
                    lineNumber: 52,
                    columnNumber: 42
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[5] = t5;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm text-zinc-300",
            htmlFor: "gamer_title",
            children: "Gamer Title"
        }, void 0, false, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, this);
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    const t8 = initial?.gamer_title || "";
    let t9;
    if ($[8] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-2",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "gamer_title",
                    name: "gamer_title",
                    defaultValue: t8,
                    className: "rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm",
                    placeholder: "e.g., Blox Fruits Player"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/profile-form.tsx",
                    lineNumber: 68,
                    columnNumber: 42
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[8] = t8;
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    let t10;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm text-zinc-300",
            htmlFor: "country",
            children: "Country"
        }, void 0, false, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 76,
            columnNumber: 11
        }, this);
        $[10] = t10;
    } else {
        t10 = $[10];
    }
    const t11 = initial?.country || "";
    let t12;
    if ($[11] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-2",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "country",
                    name: "country",
                    defaultValue: t11,
                    className: "rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/profile-form.tsx",
                    lineNumber: 84,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 84,
            columnNumber: 11
        }, this);
        $[11] = t11;
        $[12] = t12;
    } else {
        t12 = $[12];
    }
    let t13;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm text-zinc-300",
            htmlFor: "age",
            children: "Age"
        }, void 0, false, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 92,
            columnNumber: 11
        }, this);
        $[13] = t13;
    } else {
        t13 = $[13];
    }
    const t14 = initial?.age || "";
    let t15;
    if ($[14] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-2",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "age",
                    name: "age",
                    type: "number",
                    min: 1,
                    max: 150,
                    defaultValue: t14,
                    className: "rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/profile-form.tsx",
                    lineNumber: 100,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 100,
            columnNumber: 11
        }, this);
        $[14] = t14;
        $[15] = t15;
    } else {
        t15 = $[15];
    }
    let t16;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm text-zinc-300",
            htmlFor: "profile_image_url",
            children: "Profile Image URL"
        }, void 0, false, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 108,
            columnNumber: 11
        }, this);
        $[16] = t16;
    } else {
        t16 = $[16];
    }
    const t17 = initial?.profile_image_url || "";
    let t18;
    if ($[17] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            id: "profile_image_url",
            name: "profile_image_url",
            defaultValue: t17,
            className: "rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm",
            required: true
        }, void 0, false, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, this);
        $[17] = t17;
        $[18] = t18;
    } else {
        t18 = $[18];
    }
    let t19;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-zinc-500",
            children: "At the very top of the public page, only this image is shown."
        }, void 0, false, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 124,
            columnNumber: 11
        }, this);
        $[19] = t19;
    } else {
        t19 = $[19];
    }
    let t20;
    if ($[20] !== t18) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-2",
            children: [
                t16,
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        $[20] = t18;
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    let t21;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-sm text-zinc-300",
            htmlFor: "bio",
            children: "Short Bio"
        }, void 0, false, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[22] = t21;
    } else {
        t21 = $[22];
    }
    const t22 = initial?.bio || "";
    let t23;
    if ($[23] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-2",
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    id: "bio",
                    name: "bio",
                    rows: 5,
                    defaultValue: t22,
                    className: "rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/profile-form.tsx",
                    lineNumber: 147,
                    columnNumber: 44
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[23] = t22;
        $[24] = t23;
    } else {
        t23 = $[24];
    }
    let t24;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm font-medium",
                    children: "Show Personal Info"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/profile-form.tsx",
                    lineNumber: 155,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-zinc-400",
                    children: "Toggle visibility of the Personal Info section."
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/profile-form.tsx",
                    lineNumber: 155,
                    columnNumber: 77
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[25] = t24;
    } else {
        t24 = $[25];
    }
    const t25 = initial?.show_personal ?? true;
    let t26;
    if ($[26] !== t25) {
        t26 = t25.toString();
        $[26] = t25;
        $[27] = t26;
    } else {
        t26 = $[27];
    }
    let t27;
    if ($[28] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "hidden",
            name: "show_personal",
            value: t26
        }, void 0, false, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[28] = t26;
        $[29] = t27;
    } else {
        t27 = $[29];
    }
    const t28 = initial?.show_personal ?? true;
    let t29;
    if ($[30] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
            defaultChecked: t28,
            onCheckedChange: _ProfileFormSwitchOnCheckedChange
        }, void 0, false, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[30] = t28;
        $[31] = t29;
    } else {
        t29 = $[31];
    }
    let t30;
    if ($[32] !== t27 || $[33] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t24,
                t27,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[32] = t27;
        $[33] = t29;
        $[34] = t30;
    } else {
        t30 = $[34];
    }
    let t31;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm font-medium",
                    children: "Show Games"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/profile-form.tsx",
                    lineNumber: 197,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-zinc-400",
                    children: "Toggle visibility of the Games section."
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/profile-form.tsx",
                    lineNumber: 197,
                    columnNumber: 69
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[35] = t31;
    } else {
        t31 = $[35];
    }
    const t32 = initial?.show_games ?? true;
    let t33;
    if ($[36] !== t32) {
        t33 = t32.toString();
        $[36] = t32;
        $[37] = t33;
    } else {
        t33 = $[37];
    }
    let t34;
    if ($[38] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "hidden",
            name: "show_games",
            value: t33
        }, void 0, false, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[38] = t33;
        $[39] = t34;
    } else {
        t34 = $[39];
    }
    const t35 = initial?.show_games ?? true;
    let t36;
    if ($[40] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
            defaultChecked: t35,
            onCheckedChange: _ProfileFormSwitchOnCheckedChange2
        }, void 0, false, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 222,
            columnNumber: 11
        }, this);
        $[40] = t35;
        $[41] = t36;
    } else {
        t36 = $[41];
    }
    let t37;
    if ($[42] !== t34 || $[43] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t31,
                t34,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 230,
            columnNumber: 11
        }, this);
        $[42] = t34;
        $[43] = t36;
        $[44] = t37;
    } else {
        t37 = $[44];
    }
    let t38;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm font-medium",
                    children: "Show Friends"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/profile-form.tsx",
                    lineNumber: 239,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-zinc-400",
                    children: "Toggle visibility of the Friends section."
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/profile-form.tsx",
                    lineNumber: 239,
                    columnNumber: 71
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[45] = t38;
    } else {
        t38 = $[45];
    }
    const t39 = initial?.show_friends ?? true;
    let t40;
    if ($[46] !== t39) {
        t40 = t39.toString();
        $[46] = t39;
        $[47] = t40;
    } else {
        t40 = $[47];
    }
    let t41;
    if ($[48] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "hidden",
            name: "show_friends",
            value: t40
        }, void 0, false, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[48] = t40;
        $[49] = t41;
    } else {
        t41 = $[49];
    }
    const t42 = initial?.show_friends ?? true;
    let t43;
    if ($[50] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
            defaultChecked: t42,
            onCheckedChange: _ProfileFormSwitchOnCheckedChange3
        }, void 0, false, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[50] = t42;
        $[51] = t43;
    } else {
        t43 = $[51];
    }
    let t44;
    if ($[52] !== t41 || $[53] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t38,
                t41,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[52] = t41;
        $[53] = t43;
        $[54] = t44;
    } else {
        t44 = $[54];
    }
    let t45;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm font-medium",
                    children: "Show Message Form"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/profile-form.tsx",
                    lineNumber: 281,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-xs text-zinc-400",
                    children: "Toggle visibility of the Message section."
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/profile-form.tsx",
                    lineNumber: 281,
                    columnNumber: 76
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[55] = t45;
    } else {
        t45 = $[55];
    }
    const t46 = initial?.show_messages ?? true;
    let t47;
    if ($[56] !== t46) {
        t47 = t46.toString();
        $[56] = t46;
        $[57] = t47;
    } else {
        t47 = $[57];
    }
    let t48;
    if ($[58] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "hidden",
            name: "show_messages",
            value: t47
        }, void 0, false, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 297,
            columnNumber: 11
        }, this);
        $[58] = t47;
        $[59] = t48;
    } else {
        t48 = $[59];
    }
    const t49 = initial?.show_messages ?? true;
    let t50;
    if ($[60] !== t49) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
            defaultChecked: t49,
            onCheckedChange: _ProfileFormSwitchOnCheckedChange4
        }, void 0, false, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 306,
            columnNumber: 11
        }, this);
        $[60] = t49;
        $[61] = t50;
    } else {
        t50 = $[61];
    }
    let t51;
    if ($[62] !== t48 || $[63] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t45,
                t48,
                t50
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 314,
            columnNumber: 11
        }, this);
        $[62] = t48;
        $[63] = t50;
        $[64] = t51;
    } else {
        t51 = $[64];
    }
    let t52;
    if ($[65] !== t30 || $[66] !== t37 || $[67] !== t44 || $[68] !== t51) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-3 rounded-lg border border-zinc-800 bg-zinc-900/40 p-4",
            children: [
                t30,
                t37,
                t44,
                t51
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 323,
            columnNumber: 11
        }, this);
        $[65] = t30;
        $[66] = t37;
        $[67] = t44;
        $[68] = t51;
        $[69] = t52;
    } else {
        t52 = $[69];
    }
    const t53 = pending ? "Saving..." : "Save";
    let t54;
    if ($[70] !== pending || $[71] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                disabled: pending,
                className: "rounded-md bg-purple-600 px-4 py-2 font-medium text-white hover:bg-purple-500 disabled:opacity-60",
                children: t53
            }, void 0, false, {
                fileName: "[project]/src/components/admin/profile-form.tsx",
                lineNumber: 335,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 335,
            columnNumber: 11
        }, this);
        $[70] = pending;
        $[71] = t53;
        $[72] = t54;
    } else {
        t54 = $[72];
    }
    let t55;
    if ($[73] !== t12 || $[74] !== t15 || $[75] !== t20 || $[76] !== t23 || $[77] !== t3 || $[78] !== t52 || $[79] !== t54 || $[80] !== t6 || $[81] !== t9) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            action: formAction,
            className: "grid max-w-2xl gap-4",
            children: [
                t3,
                t6,
                t9,
                t12,
                t15,
                t20,
                t23,
                t52,
                t54
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/profile-form.tsx",
            lineNumber: 344,
            columnNumber: 11
        }, this);
        $[73] = t12;
        $[74] = t15;
        $[75] = t20;
        $[76] = t23;
        $[77] = t3;
        $[78] = t52;
        $[79] = t54;
        $[80] = t6;
        $[81] = t9;
        $[82] = t55;
    } else {
        t55 = $[82];
    }
    return t55;
}
_s(ProfileForm, "OLMDlnbqeG9E7nZwNh9mRU8NtOU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"]
    ];
});
_c = ProfileForm;
function _ProfileFormSwitchOnCheckedChange4(v_2) {
    const el_2 = document.querySelector("input[name=\"show_messages\"]");
    if (el_2) {
        el_2.value = v_2.toString();
    }
}
function _ProfileFormSwitchOnCheckedChange3(v_1) {
    const el_1 = document.querySelector("input[name=\"show_friends\"]");
    if (el_1) {
        el_1.value = v_1.toString();
    }
}
function _ProfileFormSwitchOnCheckedChange2(v_0) {
    const el_0 = document.querySelector("input[name=\"show_games\"]");
    if (el_0) {
        el_0.value = v_0.toString();
    }
}
function _ProfileFormSwitchOnCheckedChange(v) {
    const el = document.querySelector("input[name=\"show_personal\"]");
    if (el) {
        el.value = v.toString();
    }
}
async function _ProfileFormUseActionState(_prev, formData) {
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$data$3a$a30cd2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateProfileAction"])(formData);
    return res;
}
var _c;
__turbopack_context__.k.register(_c, "ProfileForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a18b6807._.js.map