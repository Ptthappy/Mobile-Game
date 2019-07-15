import { Component, OnInit } from '@angular/core';
import { NotBoringHelloSceneService } from '../../services/not-boring-hello-scene.service';
import { Level1Service } from '../../services/level-1.service';
import { Level2Service } from '../../services/level-2.service';
import { Level3Service } from '../../services/level-3.service';
import { Level4Service } from '../../services/level-4.service';
import { Level5Service } from '../../services/level-5.service';
import { Level6Service } from '../../services/level-6.service';
import { Level7Service } from '../../services/level-7.service';
import { Level8Service } from '../../services/level-8.service';
import { Level9Service } from '../../services/level-9.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
  providers: [NotBoringHelloSceneService]
})
export class GamePage implements OnInit {

  public gameConfig: GameConfig = {
    title: 'Demontower',
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scene: [NotBoringHelloSceneService, Level1Service, Level2Service,
      Level3Service, Level4Service,
      Level5Service, Level6Service,
      Level7Service, Level8Service,
      Level9Service],
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false
      }
  },
  };

  constructor() { }

  ngOnInit() {
  }

}
