(() => { var e, n = { 150: (e, n) => { var r = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]; n.aux = "mati", n.name = function (e) { return r[e] }, n.number = function (e) { return r.indexOf(e) } } }, r = {}; e = function e(o) { var t = r[o]; if (void 0 !== t) return t.exports; var u = r[o] = { exports: {} }; return n[o](u, u.exports, e), u.exports }(150), console.log(e.name(0)), console.log(e.number("Lunes")) })();