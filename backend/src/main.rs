use actix_web::{web, App, HttpServer, middleware::Logger};
use actix_cors::Cors;
use env_logger::Env;

mod handlers;
mod models;
mod routes;

use routes::config_routes;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // Initialize logger
    env_logger::init_from_env(Env::default().default_filter_or("info"));

    println!("🦀 Starting Rust Backend Server...");
    println!("📡 Server running on http://localhost:8080");
    println!("🔗 API Endpoints:");
    println!("   GET /api/health");
    println!("   GET /api/multiply/{{num1}}/{{num2}}");
    println!("📱 Frontend should run on http://localhost:5173");

    HttpServer::new(|| {
        let cors = Cors::default()
            .allow_any_origin()
            .allow_any_method()
            .allow_any_header()
            .max_age(3600);

        App::new()
            .wrap(cors)
            .wrap(Logger::default())
            .configure(config_routes)
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}