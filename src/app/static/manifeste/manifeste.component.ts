import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anms-manifeste',
  templateUrl: './manifeste.component.html',
  styleUrls: ['./manifeste.component.css']
})
export class ManifesteComponent implements OnInit {

  enonces = [
   "Dans une démocratie digne de ce nom, le peuple est souverain. C’est donc à lui de dicter les règles du jeu.",
    "Présentement, la souveraineté du peuple est bafouée de toutes parts. Trop souvent, ceux que nous choisissons pour nous représenter, une fois élus, servent d’autres intérêts que ceux du peuple.",
    "Pour sortir de cette impuissance politique, il ne suffit pas de manifester ni de changer de parti au pouvoir. Il faut changer le régime politique lui-même et les règles du jeu qui sont à la source de notre impuissance.",
    "Le moyen de changer de régime politique, c’est d’écrire la constitution de l’État. Une constitution est ce qui nous définit comme peuple distinct et nous protège des abus de pouvoir. C’est la Loi fondamentale que tous les dirigeants, organismes et citoyens doivent respecter.",
    "Le peuple québécois ne s’est jamais prononcé sur ce qui lui sert de constitution, aussi bien au Québec qu’au Canada.",
    "Pour écrire notre constitution, il faut avoir recours au peuple souverain, car les partis politiques sont sur ce sujet en conflit d’intérêts. Ce n’est pas aux gens au pouvoir d’écrire les règles du pouvoir.",
    "L’Assemblée par laquelle le peuple peut exercer sa souveraineté et son pouvoir constituant de façon légitime, ordonnée et efficace est ce qu’on appelle une Assemblée constituante. Son rôle est d’inviter la population à y participer et à proposer en toute liberté, un texte de constitution pour adoption par référendum. Elle doit être représentative, participative, non partisane et libre dans ses délibérations, donc composée idéalement de citoyens tirés au sort. Elle doit pouvoir recourir à toutes les ressources et expertises nécessaires pour faire son travail. Le débat public entourant son travail doit être encadré de façon à prévenir le contrôle de l’information par des intérêts particuliers.",
    "L'Assemblée constituante citoyenne doit idéalement être convoquée par l’Assemblée nationale pour s’assurer que la Constitution qui en résultera, une fois adoptée par référendum, ne puisse être écartée par les pouvoirs en place, au Québec, au Canada et à l’international.",
    "Nous, citoyennes et citoyens responsables, nous nous engageons à promouvoir, à préparer et à provoquer la convocation d’une Assemblée constituante non partisane, libre dans ses délibérations, et à tout mettre en œuvre pour que soit respectée la volonté du peuple québécois.",
    "Voici la mission que s'est donnée l'Alliance pour une constituante citoyenne du Québec (ACCQ)"


  ]

  constructor() { }

  ngOnInit() {
  }

}
