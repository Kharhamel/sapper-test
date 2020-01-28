
//todo use a mongo database
const paintings = [
    {"label": "painting1", "description": "super peinture", "src": "great-success.png"},
    {"label": "painting2", "description": "super peinture", "src": "great-success.png"},
    {"label": "painting3", "description": "super peinture", "src": "great-success.png"}
];

const contents = JSON.stringify(paintings);

export function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(contents);
}